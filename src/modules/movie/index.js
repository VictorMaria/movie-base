import express from 'express';
import * as movieController from './movieController';

const Router = express.Router();

Router.get(
  '/movies',
  movieController.findMany,
);

export default Router;
