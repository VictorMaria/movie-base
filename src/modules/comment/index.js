import express from 'express';
import * as commentController from './commentController';
import commentValidator from '../../validator/commentValidator';
import validationHandler from '../../middleware/validationHandler';
import { checkForMovie } from '../../middleware/checkForMovie';

const Router = express.Router();

Router.post(
  '/comments',
  commentValidator.add,
  validationHandler,
  checkForMovie,
  commentController.add,
);

Router.get(
  '/comments',
  commentController.findMany,
);

export default Router;
