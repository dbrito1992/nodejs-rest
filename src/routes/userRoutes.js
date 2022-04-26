import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Não deve existir em um projeto!
// routes.get('/:id', UserController.show);
// routes.get('/', UserController.index);

routes.post('/', UserController.store);
routes.put('/', loginRequired, UserController.update);
routes.delete('/', loginRequired, UserController.delete);

export default routes;
