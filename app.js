import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoute from './src/routes/homeRoutes';
import userRoute from './src/routes/userRoutes';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoute);
  }
}

export default new App().app;
