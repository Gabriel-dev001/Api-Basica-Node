const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Ola');
})

app.listen (3000, () => {
    console.log('Server esta rodando');
})

