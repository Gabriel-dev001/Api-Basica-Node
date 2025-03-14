const express = require('express');
const routes = express.Router();

const users = [{
    id:1,
    name:"gabriel",
    email: "Email@email.com",
    senha: "123"
}];

routes.post('/login', (req, res) => {
    const {email, senha} = req.body;

    const user = users.find(user => user.email === email && user.senha === senha);

    if(!user){
        return res.status(401).json({message: 'Credenciais invalidas'});    
    }

    return res.status(201).json(user);
})

module.exports = routes;