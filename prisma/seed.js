const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { v4: uuidv4 } = require('uuid');
const { movies, characters } = require('./seedData');

const charactersResult = [];
const movieResults = [];

for (let {title, opening_crawl, release_date} of movies.results) {
	movieResults.push({
		id: uuidv4(),
		title,
		openingCrawl: opening_crawl,
		releaseDate: new Date(release_date),
     })
 };

 for (let { name, gender, height } of characters.results) {
	 charactersResult.push({
		 id: uuidv4(),
		 name,
		 gender,
		 height: parseFloat(height),
	 })
 }

(async function main() {
  try {
    const createManyMovies = await prisma.movie.createMany({
        data: movieResults,
        skipDuplicates: true,
      });

	const createManyCharacters = await prisma.character.createMany(
		{
			data: charactersResult,
			skipDuplicates: true,
		}
	);
	
    console.log('success', createManyMovies);
	console.log('success', createManyCharacters)
  } catch(error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
