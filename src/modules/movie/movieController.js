import * as movieService from './movieService';
import responseHandler from '../../helpers/responseHandler';

const { successResponse, errorResponse } = responseHandler;

export const findMany = async (req, res) => {
    try {
        const { data } = await movieService.findMany();
        successResponse(res, 200, data, 'movie fetched successfully');
    } catch (error) {
       return errorResponse(res, 500, 'Ooops, seems Darth Vader broke something');
    }
};