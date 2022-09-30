import express from 'express';
import bookRoute from './book.route.js';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/books',
    route: bookRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
