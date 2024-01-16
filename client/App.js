import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesList from './components/NotesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Note Taking App</h1>
      </header>
      <NotesList />
    </div>
  );
}

export default App;
