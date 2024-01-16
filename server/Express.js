const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'build' directory (adjust the path as needed)
app.use(express.static(path.join(__dirname, 'client/build')));

// Wildcard route to serve the main HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
