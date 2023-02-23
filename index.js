require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {})

server.post('/api/register', (req, res) => {})

server.post('/api/login', (req, res) => {})

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`\n***Server Running on http://localhost:${port}***\n`)
})