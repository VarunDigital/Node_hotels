const express = require('express');
const app = express();
const db = require('./database');

const bodyParser = require('body-parser');
const { error } = require('console');
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("Hello Man, What would you like to order?");
});

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);


const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
