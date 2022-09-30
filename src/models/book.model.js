
import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    pages : {
        type : Number,
        required : true
    },
    prices : {
        type : String,
        required : true
    }
})

const Book = new mongoose.model('Book', bookSchema);
export default Book;