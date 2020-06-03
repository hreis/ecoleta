import express from 'express';
import PointsController from './controllers/PointsController';
import ItensController from './controllers/ItensController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItensController();

routes.get('/itens', itensController.index);

routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);

export default routes;

//Service Pattern
//Repository Pattern