import { Router } from 'express';

import tudusRouter from './tudus.routes';




const routes = Router();

routes.use('/tudus', tudusRouter);



export default routes;