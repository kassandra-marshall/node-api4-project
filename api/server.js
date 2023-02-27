const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());

server.use(cors());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'I did a get' })
});

server.post('/api/register', (req, res) => {
    res.status(201).json({ message: 'I did a post' })
});

server.post('/api/login', (req, res) => {
    res.status(200).json({ message: 'I logged in' })
});

// server.use('*', (req, res) => {
//     res.send(`<h1>Hello, there!<h1>`)
// });
// NOT WORKING

server.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message,
        customMessage: 'Something went wrong',
        stack: error.stack
    });
});

module.exports = server