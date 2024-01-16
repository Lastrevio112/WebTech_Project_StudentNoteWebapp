import React, { useState, useEffect } from 'react';

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('/api/notes')
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);
  

  return (
    <div>
      <h2>Your Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>: {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
