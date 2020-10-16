import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

/* app.post('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({ message: 'hello world' });
}); */

app.get('/users', (request, response) => {
    return response.json({ message: 'hello world' });
});

app.listen(3333);