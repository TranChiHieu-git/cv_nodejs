const path = require('path');
const express = require('express');
const route = require('./routes');
const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname, 'resources/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
route(app);
app.listen(port);