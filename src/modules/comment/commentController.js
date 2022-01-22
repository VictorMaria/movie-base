import * as commentService from './commentService';
import responseHandler from '../../helpers/responseHandler';

const { successResponse, errorResponse } = responseHandler;

export const add = async (req, res) => {
    try {
        const { data, message } = await commentService.add(req.body);
        successResponse(res, 200, data, message);
    } catch (error) {
       return errorResponse(res, 500, 'Ooops, seems Darth Vader broke something');
    }
};

export const findMany = async (req, res) => {
    try {
        const { data, message } = await commentService.findMany(req.body);
        successResponse(res, 200, data, message);
    } catch (error) {
       return errorResponse(res, 500, 'Ooops, seems Darth Vader broke something');
    }
};
