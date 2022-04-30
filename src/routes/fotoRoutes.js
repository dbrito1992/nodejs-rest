import { Router } from 'express';

import fotoController from '../controllers/FotoController';

const routes = new Router();

routes.post('/', fotoController.store);

export default routes;
