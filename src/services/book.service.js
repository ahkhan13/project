import { BookModel } from "../models/index.js";

export const createBook= async (body)=>{
    const books = new BookModel(
        body
    )
    const Book= await books.save();
    return Book;
}

export const updateBook= async (id, body)=>{
    const Book= await BookModel.findOneAndUpdate({_id : id}, {$set : body}, {new : true});
    return Book;
}

export const getBook= async (id)=>{
    const Book= await BookModel.findOne({_id : id});
    return Book;
}

export const getAllBook= async (query)=>{
    const Book= await BookModel.find(query);
    return Book;
}

export const deleteBook= async (id)=>{
    const Book= await BookModel.deleteOne({_id : id});
    return Book;
}