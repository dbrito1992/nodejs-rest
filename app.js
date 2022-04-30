import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoute from './src/routes/homeRoutes';
import userRoute from './src/routes/userRoutes';
import tokenRoute from './src/routes/tokenRoutes';
import alunoRoute from './src/routes/alunoRoutes';
import fotoRoute from './src/routes/fotoRoutes';

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
    this.app.use('/tokens/', tokenRoute);
    this.app.use('/alunos/', alunoRoute);
    this.app.use('/fotos/', fotoRoute);
  }
}

export default new App().app;
