import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.send({ message: 'oi' }));

export default routes;