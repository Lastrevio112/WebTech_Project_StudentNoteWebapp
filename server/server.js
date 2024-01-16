const express = require('express');
const notesRoutes = require('./routes/notesRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/notes', notesRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
