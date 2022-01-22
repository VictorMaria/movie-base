import axios  from 'axios';
import * as movieService from './movieService';
import responseHandler from '../../helpers/responseHandler';
import { movieCharacterURLs, titleMap } from '../../helpers/movieCharacterURLs';

const { successResponse, errorResponse } = responseHandler;

export const findMany = async (req, res) => {
    try {
        const { data, message } = await movieService.findMany();
        successResponse(res, 200, data, message);
    } catch (error) {
       return errorResponse(res, 500, 'Ooops, seems Darth Vader broke something');
    }
};

export const fetchMovieCharactersList = async (req, res) => {
    try {
        const { title } = req.params;
        const preprocessedCharactersList = movieCharacterURLs[titleMap[title]].map(async ( characterURL ) => {
            const result =  await axios.get(characterURL);
            return result;
        });
    const processedCharacterList = await Promise.all(preprocessedCharactersList);
    const refinedResult = processedCharacterList.map(item => {
        const { name } = item.data;
        return name;
    });

    return successResponse(
        res,
        200,
        {
            movie: titleMap[title], 
            characters: refinedResult
        },
        'Movie characters list fetched successfully')
    } catch (error) {
        return errorResponse(res, 500, 'Ooops, seems Darth Vader broke something');
    }
}
