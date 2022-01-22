import { query } from 'express-validator';

const characterValidator = {
    findMany: [
        query('gender')
            .optional()
            .trim()
            .isIn([ 'male', 'female', 'n/a' ])
            .withMessage('Gender should be male, female or n/a'),
        query('orderField')
            .optional()
            .trim()
            .isIn([ 'name', 'gender', 'height' ])
            .withMessage('order field is either name, gender or height'),
        query('direction')
            .optional()
            .trim()
            .isIn(['desc', 'asc'])
            .withMessage('direction is either desc or asc'),
    ],
};

export default characterValidator;
