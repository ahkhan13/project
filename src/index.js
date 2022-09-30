import express from 'express';
import ApiError from './utils/ApiError.js';
import { errorConverter, errorHandler } from './middleware/error.js';
import { initiateDBConnection } from './db/conn.js';
import { PORT } from './db/config.js';
import httpStatus from 'http-status';
import cors from 'cors';
import routes from './routes/index.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use('/i1',routes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
});

app.use(errorConverter);
app.use(errorHandler);
await initiateDBConnection();
app.listen(PORT, async ()=> {
    console.log("Listing On  : http://localhost:3000/i1/");
})
