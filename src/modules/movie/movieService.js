import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const findOne = async (movieId) => {
    const movie = await prisma.movie.findUnique({
        where: {
          id: movieId,
        },
        select: {
          id: true,
          title: true,
          openingCrawl: true,
          commentCount: true,
        },
      });

      if (!movie) {
          return {
              status: 'failed',
              message: 'this movie does not exist in our vault',
          }
      }

      return {
          status: 'success',
          data: movie,
      }
};

export const findMany = async () => {
    const movies = await prisma.movie.findMany({
        select: {
            id: true,
            title: true,
            openingCrawl: true,
            commentCount: true,
            releaseDate: true,
            Comments: true,
          },
          orderBy: {
            releaseDate: "asc"
          }
      });

      return {
          status: 'success',
          message: 'movies fetched successfully',
          data: {
              meta: {
                  count: movies.length
                },
              movies }
            };
};
