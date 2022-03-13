// Imports express
const express = require("express");
// Imports path
const path = require("path");
// Imports api routes
const api = require("./routes/taker.js");
// Imports clog module
const {clog} = require("./middleware/clog");

// Constant for local host port
const PORT = process.env.PORT || 3001;

// Initializtion of app variable
const app = express();

// Imports cutom middleware, "clog"
app.use(clog);

// Middleware for parsin JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/api', api);

app.use(express.static("public"));

// GET route for homepage
app.get("/", (req, res) => 
    res.sendFile(path.join(__dirname, "./public/index.html"))
);

// GET route for notes page
app.get("/api/notes", (req,res) => 
    res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT} 🚀`)
);
