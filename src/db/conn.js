import mongoose from 'mongoose';
import { MONGOURI } from './config.js';

export const initiateDBConnection = async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log('DB Connected Successfully');
  } catch (err) {
    console.log('DB Connection error', err);
  }
};

