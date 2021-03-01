import { Router } from 'express';

const routes = Router();

routes.get('/',(req, res) => {
    res.send('oi');
});
routes.get('/', (req,res) => {
    res.send({message:'a'})
})
export default routes;
