var http = require('http');
var bodyParser = require('body-parser')

var express = require('express');
var app = express();
var port = process.env.port || 8080;

// Import routes
var authRoutes = require('./routes/authRoutes');

// your express configuration here

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/auth', authRoutes)

http.createServer(app).listen(port, () => {
    console.log(`Http Server listening to port: ${port}`);
});

app.get('/', (req, res) => {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});