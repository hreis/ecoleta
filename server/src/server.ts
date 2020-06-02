import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('listagem de users');

    res.send('Hello World');
});

app.listen(3333);