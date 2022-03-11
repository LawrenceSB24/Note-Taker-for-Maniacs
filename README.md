# Note-Taker-for-Maniacs
A note taking application that uses Express.js to modify and save notes

## User Story
```
As A small business owner
I WANT to be able  to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria
```
GIVEN a note-taking application

WHEN I open the Note Taker

THEN I am presented with a landing page with a link to a notes page

WHEN I click on the link to the notes page

THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note's text

WHEN I enter a new note title and the note's text in the right-hand column

THEN a save icon appears in the navigation at the top of the page

WHEN I click on the Save Icon

THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column

WHEN I click on the Write icon in the navigation at the top of the page

THEN I am presented with empty fields to enter a new note title and the note's text in the right-hand column
```

## Developer Notes (to be taken down prior to submission)
> 1) Modifying starter code to create app for writing and saving notes
> 2) Uses Express.js back-end
> 3) Will save and retrieve note data from a JSON file
> 4) Front-end has been completed

### TODO
> 1. Build back-end
> 2. Connect back to front
> 3. Deploy entire application to Heroku

### Getting started

> 1. On back-end, application should inculde `db.json` that will be used to store and retrieve notes using `fs` module

> 2. HTML Routes
    > * `GET /notes` should return `notes.html` file
    > * `GET *` should return `index.html`

> 3. API Routes
    > * `GET /api/routes` should read `db.json` file and return all saved notes as JSON
    > * `POST /api/notes` should
        * Receive new note to save on request body
        * Add it to `db.json` file
        * Return new note to the client
        * You'll need to find a way to give each note a unique name when it's saved
            * Look into npm packages that can do this for you