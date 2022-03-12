const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 * Function for writing data to JSON file given a destination and information
 * @param {string} destination The file you are writing to (in this case it will be notes.html) 
 * @param {object} info The information you are writing to the file 
 * @returns {void} Nothing (this might not be a good idea)
 */
const writeToFile = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
        err ? console.error(err) : console.info(`\nData has been written to ${destination}`)
    );
;

/**
 * Function for reading previous notes and appending new information
 * @param {object} info The information you want to append to the file
 * @param {string} file The path to the file you want to save to 
 */
const readAndAppend = (info, file) => 
    fs.readAndAppend(file, 'utf8', (err,data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNote = JSON.parse(data);
            parsedNote.push(info);
            writeToFile(file, parsedNote);
        }
    });

module.exports = {readFromFile, writeToFile, readAndAppend};