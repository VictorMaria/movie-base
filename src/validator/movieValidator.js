import { param } from 'express-validator';
import { movieCharacterURLs, titleMap } from '../helpers/movieCharacterURLs';

const movieTitles = Object.keys(titleMap);

const movieValidator = {
    fetchMovieCharactersList: [
    param('title')
        .not()
        .isEmpty({ ignore_whitespace: true })
        .withMessage('movie title is required')
        .trim()
        .isIn(movieTitles)
        .withMessage(`movie title is either ${movieTitles.join(', ')}`),
    ],
};

export default movieValidator;
