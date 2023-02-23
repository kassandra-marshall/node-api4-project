const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {})

server.post('/api/register', (req, res) => {})

server.post('/api/login', (req, res) => {})

module.exports = server