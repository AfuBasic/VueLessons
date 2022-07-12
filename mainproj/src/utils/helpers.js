import errors from './errors.js';

export const errorHandler = (errConstant) => {
    const error = new Error(errors[errConstant] || 'An error occured');
    return error;
};