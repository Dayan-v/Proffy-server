import express, { request } from 'express';
import ClassesController from './database/controller/ClassesController';
import ConnectionsController from './database/controller/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;