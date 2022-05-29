import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';
import homeRoute from './routes/homeRoutes';
import userRoute from './routes/userRoutes';
import tokenRoute from './routes/tokenRoutes';
import alunoRoute from './routes/alunoRoutes';
import fotoRoute from './routes/fotoRoutes';

const whiteList = [
  'https://forcaweb.com.br',
  'http://localhost:3001',
];

const corsOptions = {
  origin(oringin, callback) {
    if (whiteList.indexOf(oringin) !== -1 || !oringin) {
      callback(null, true);
    } else {
      callback(new Error('Not allow by Cors!'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
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
