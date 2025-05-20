import routes from './routes.js';
import cors from 'cors';
import express from 'express';

//iniciar  o express
const app = express();

//defienir as regras do servidor
//meio de comunicação
app.use(express.json());

//definir com os dados serao interpretados
app.use(express.urlencoded({extended: true}));

//definir a cors

app.use(cors());

app.use(routes);

export default app;
