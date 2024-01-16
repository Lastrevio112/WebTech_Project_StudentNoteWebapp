const express = require('express');
const router = express.Router();

let notes = [
  { id: 1, content: 'Note 1' },
  { id: 2, content: 'Note 2' },
];

// Get all notes
router.get('/', (req, res) => {
  res.json(notes);
});

// Get a specific note by ID
router.get('/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find((note) => note.id === noteId);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});

// Create a new note
router.post('/', (req, res) => {
  const newNote = {
    id: notes.length + 1,
    content: req.body.content,
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// Update a note by ID
router.put('/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const updatedContent = req.body.content;

  notes = notes.map((note) =>
    note.id === noteId ? { ...note, content: updatedContent } : note
  );

  res.json({ message: 'Note updated successfully' });
});

