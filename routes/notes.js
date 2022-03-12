const note = require('express').Router();

// Creates unique id for note
const {v4 : uuidv4} = require('uuid');

// Imports for read, write, and append functions
const {
    readFromFile,
    readAndAppend,
    writeToFile
} = require('../helpers/fsUtils');

// GET route for retrieving ALL notes
note.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

// GET route for a previous note
note.get('/api/notes/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data)
        .then((json) => {
            const result = json.filter((note) => note.note_id === noteId);
            return result.length > 0
                ? res.json(result)
                : res.json('No previous note exists')
        }));
});

// POST route for creating a new note
note.post('/api/notes', (req,res) => {
    console.log(req.body);
    const {title, text, note_id} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend (newNote, './db/db.json');
        res.json(`Note has been added 🚀`);
    } else {
        res.error('Note has been corrupted');
    }
});

// DELETE route for previous notes
note.delete('/:note_id', (req,res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_id !== noteId);
            writeToFile('./db/db.json', result);
            res.json(`Item ${noteId} has been deleted 🗑️`)
        });
});

module.exports = note;
