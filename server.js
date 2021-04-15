const express = require('express');
const mongoose = require('mongoose'); //importing mongoose here

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let myRoute = require('./routes')

app.use(myRoute);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/3001', {
 useFindAndModify: false,
 useNewUrlParser: true,
 useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));