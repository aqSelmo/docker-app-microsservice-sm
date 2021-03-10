const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

dotenv.config();

const app = express();
const sequelize = new Sequelize(process.env.DB_NAME , process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    retry: {
        max: 4
    }
});

app.get("/users", (request, response) => {
    return response.send('Teste docker!');
});

sequelize.authenticate()
    .then(() => console.log('Conexão estabilizada'))
    .catch(() => console.log('err'));

app.listen(3000);