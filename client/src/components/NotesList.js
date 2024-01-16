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
      {/* We'll render notes here */}
    </div>
  );
}

export default NotesList;
