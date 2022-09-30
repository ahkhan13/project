import express from "express";
import {bookController} from '../controllers/index.js';
import { validate } from "../middleware/validate.js";
import { bookValidation } from "../validation/index.js";
const router = express.Router();

router.route('/')
       .post(validate(bookValidation.createBook),bookController.createBook)
       .get(validate(bookValidation.getBook),bookController.getBook);
      

router.route('/:id')
      .put(validate(bookValidation.updateBookById),bookController.updateBookById)
      .get(validate(bookValidation.getBookById),bookController.getBookById)
      .delete(validate(bookValidation.deleteBookById),bookController.deleteBookById);


export default router;
