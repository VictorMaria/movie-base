import { check } from 'express-validator';

const commentValidator = {
    add: [
        check('movieId')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('movie id is required')
            .trim()
            .isLength({ min: 36, max: 36 })
            .withMessage('movie id must have 36 characters'),
        check('content')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('content is required')
            .trim()
            .isLength({ min: 2, max: 500 })
            .withMessage('content must be between 2 and 500 characters'),
        check('ipAddress')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('ip address is required')
            .trim()
            .isIP()
            .withMessage('invalid ip address'),
    ],
};

export default commentValidator;
