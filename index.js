'use strict';

const path = require('path');
const express = require("express");
const app = require('express')();

const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'testheroku')));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});