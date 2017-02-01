import express from 'express';

//Controlleres
import basicController from './controllers/basicController';
import userController from './controllers/userController';

const routes = express();

//Basic Routes
routes.get('/', basicController.get);

//User Routes
routes.post('/user', userController.post)

//Default Routes '*'

export default routes;
