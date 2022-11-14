const express = require('express');
const app = express();
app.set('view-engine', 'html');
app.set('views', './app/views');

module.exports= app;