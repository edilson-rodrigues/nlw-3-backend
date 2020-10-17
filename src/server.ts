import express from 'express';


import './database/connection';
import './routes';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

/* app.post('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({ message: 'hello world' });
}); */

app.listen(3333);