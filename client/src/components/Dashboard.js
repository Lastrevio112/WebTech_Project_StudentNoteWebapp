// src/components/Dashboard.js
import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: 'Note 1' },
    { id: 2, content: 'Note 2' },
  ]);

  const [newNote, setNewNote] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  const noteRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (noteRef.current && !noteRef.current.contains(event.target)) {
        setSelectedNote(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleCreateNote = () => {
    if (newNote.trim() !== '') {
      const newNoteObject = {
        id: notes.length + 1,
        content: newNote,
      };

      setNotes([...notes, newNoteObject]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleNoteClick = (id) => {
    setSelectedNote(selectedNote === id ? null : id);
  };

  return (
    <div className="dashboard-container">
      <h2>Your Notes</h2>

      {/* Create Note Form */}
      <div className="create-note-form">
        <input
          type="text"
          placeholder="Enter your new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={handleCreateNote}>Create Note</button>
      </div>

      {/* Notes Container */}
      <div className="notes-container">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`note-card ${selectedNote === note.id ? 'selected' : ''}`}
            onClick={() => handleNoteClick(note.id)}
            ref={noteRef}
          >
            {selectedNote === note.id ? (
              <textarea
                value={note.content}
                onChange={(e) => {
                  const updatedNotes = notes.map((n) =>
                    n.id === note.id ? { ...n, content: e.target.value } : n
                  );
                  setNotes(updatedNotes);
                }}
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the textarea
              />
            ) : (
              <p>{note.content}</p>
            )}

            <div className="note-options">
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
