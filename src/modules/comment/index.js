import express from 'express';
import * as commentController from './commentController';
import commentValidator from '../../validator/commentValidator';
import validationHandler from '../../middleware/validationHandler';

const Router = express.Router();

Router.post(
  '/comments',
  commentValidator.add,
  validationHandler,
  commentController.add,
);

export default Router;
