import express from 'express';
import * as movieController from './movieController';
import movieValidator from '../../validator/movieValidator';
import validationHandler from '../../middleware/validationHandler';

const Router = express.Router();

Router.get(
  '/movies',
  movieController.findMany,
);

Router.get(
  '/movies/:title/characters',
  movieValidator.fetchMovieCharactersList,
  validationHandler,
  movieController.fetchMovieCharactersList,
  )

export default Router;
