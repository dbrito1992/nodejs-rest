import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.post('/', UserController.store);
routes.get('/', loginRequired, UserController.index);
routes.get('/:id', UserController.show);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.delete);

export default routes;
