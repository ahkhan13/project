import Joi from 'joi';
import { objectId } from './custom.validation.js';
export const createBook = {
    body : Joi.object().keys({
        name : Joi.string().required(),
        imageUrl : Joi.string().uri().required(),
        author : Joi.string().required(),
        pages:Joi.number().required().integer(),
        prices : Joi.number().required(),
    })
}

export const updateBookById = {
    body : Joi.object().keys({
        name : Joi.string(),
        imageUrl : Joi.string().uri(),
        author : Joi.string(),
        pages:Joi.number().integer(),
        prices : Joi.number(),
    }),
    params : Joi.object().keys({
        id : Joi.custom(objectId).required()
    })
}
export const deleteBookById = {
    params : Joi.object().keys({
        id : Joi.custom(objectId).required()
    })
}
export const getBookById = {
    params : Joi.object().keys({
        id : Joi.custom(objectId).required()
    })
}
export const getBook = {
    query : Joi.object().keys({
        author : Joi.string(),
        name: Joi.string(),
    })
}