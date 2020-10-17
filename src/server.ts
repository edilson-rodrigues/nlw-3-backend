import express from 'express';
import path from 'path';


import './database/connection';
import './routes';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

/* app.post('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({ message: 'hello world' });
}); */

app.listen(3333);