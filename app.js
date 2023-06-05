// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set the view engine
app.set('view engine', 'ejs');

// Set up static files
app.use(express.static('public'));

// Parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Route for handling the form submission
app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  // Handle the submitted message (e.g., save to a database, send an email, etc.)
  res.render('message', { name, message });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
