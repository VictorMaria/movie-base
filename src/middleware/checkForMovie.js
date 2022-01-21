import responseHandler from '../helpers/responseHandler';
import { findOne } from '../modules/movie/movieService';

const { errorResponse } = responseHandler;

export const checkForMovie = async (req, res, next) => {
    const { movieId } = req.body;
    const { status, message } = await findOne(movieId);

    if (status === 'failed') {
        return errorResponse(res, 404, message);
    }

    return next();
};
