import httpStatus from 'http-status';
import {bookService} from '../services/index.js';
import ApiError from '../utils/ApiError.js';
import {BOOK_CREATED_SUCCESSFULLY, NOT_FOUND, BOOK_UPDATED_SUCCESSFULLY, BOOK_DELETED_SUCCESSFULLY} from '../utils/error-msg.js';
export const createBook = async (req, res, next)=>{
    try {
       const {body} = req;
       const book = await bookService.createBook(body);
       return res.status(httpStatus.CREATED).json({message : BOOK_CREATED_SUCCESSFULLY, _id : book._id})
    }catch(err){
       return next(err);
    }
}

export const updateBookById = async (req, res, next)=>{
    try {
       const {body} = req;
       const book = await bookService.updateBook(req.params.id,body);
       if(!book){
        return next(new ApiError(httpStatus.BAD_REQUEST, NOT_FOUND));
       }
       return res.status(httpStatus.OK).json({message : BOOK_UPDATED_SUCCESSFULLY, _id : book._id})
    }catch(err){
       return next(err);
    }
}

export const getBook = async (req, res, next)=>{
    try {
        const {query} = req;
       const book = await bookService.getAllBook(query);
       return res.status(httpStatus.OK).json(book);
    }catch(err){
       return next(err);
    }
}
export const getBookById = async (req, res, next)=>{
    try {
       const {body} = req;
       const book = await bookService.getBook(req.params.id);
       if(!book){
        return next(new ApiError(httpStatus.BAD_REQUEST, NOT_FOUND));
       }
       return res.status(httpStatus.OK).json(book);
    }catch(err){
       return next(err);
    }
}

export const deleteBookById = async (req, res, next)=>{
    try {
       const {body} = req;
       const book = await bookService.deleteBook(req.params.id);
       if(!book){
        return next(new ApiError(httpStatus.BAD_REQUEST, NOT_FOUND));
       }
       return res.status(httpStatus.OK).json({message : BOOK_DELETED_SUCCESSFULLY})
    }catch(err){
       return next(err);
    }
}