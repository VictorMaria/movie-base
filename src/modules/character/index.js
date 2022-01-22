import express from 'express';
import * as characterController from './characterController';
import { characterSelectionOpitions } from '../../middleware/queryBuilder';
import characterValidator from '../../validator/characterValidator';
import validationHandler from '../../middleware/validationHandler';

const Router = express.Router();

Router.get(
  '/characters',
  characterValidator.findMany,
  validationHandler,
  characterSelectionOpitions,
  characterController.findMany,
);

export default Router;
