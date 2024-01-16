// server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('database.db');

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists in the database
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!row) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare hashed password
    bcrypt.compare(password, row.password, (bcryptErr, result) => {
      if (bcryptErr || !result) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Login successful
      return res.status(200).json({ message: 'Login successful' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});