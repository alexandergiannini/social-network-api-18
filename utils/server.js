const express = require('express');
let myRoute = require('../routes');
let createServer = function () {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    //let myRoute = require('../routes');
    
    app.use(myRoute);
    return app;
}

module.exports = createServer;
//const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// let myRoute = require('../routes');

// app.use(myRoute);
