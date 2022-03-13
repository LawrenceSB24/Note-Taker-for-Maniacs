const express = require('express');

// Import note router for /notes
const notesRouter = require('./notes');

const app = express();

app.use('/api/notes', notesRouter);

module.exports = app;