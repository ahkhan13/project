import dotenv from 'dotenv/config';
export const MONGOURI = process.env.MONGOURI || 'mongodb://localhost:27017/test';
export const env = process.env.env || 'development';
export const PORT = process.env.PORT || 3000;