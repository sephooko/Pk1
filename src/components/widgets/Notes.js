import React, { useState } from 'react';

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const addNote = () => {
    if (noteTitle.trim() && noteContent.trim()) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          title: noteTitle,
          content: noteContent
        }
      ]);
      setNoteTitle('');
      setNoteContent('');
    }
  };

  const editNote = () => {
    if (noteTitle.trim() && noteContent.trim()) {
      setNotes(
        notes.map(note => {
          if (note.id === selectedNote.id) {
            return {
              ...note,
              title: noteTitle,
              content: noteContent
            };
          }
          return note;
        })
      );
      setSelectedNote(null);
      setNoteTitle('');
      setNoteContent('');
    }
  };

  const deleteNote = () => {
    setNotes(notes.filter(note => note.id !== selectedNote.id));
    setSelectedNote(null);
  };

  const selectNote = note => {
    setSelectedNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content);
  };

  const renderNoteTitle = note => {
    return (
      <li key={note.id} onClick={() => selectNote(note)}>
        {note.title}
      </li>
    );
  };

  const renderNoteContent = () => {
    return (
      <div>
        <ul className="list-group">
            <li className="list-group-item"><h3>{selectedNote.title}</h3></li>

            <li className="list-group-item"><p>{selectedNote.content}</p></li>
        </ul>
        <button className="btn btn-outline-secondary" onClick={() => setSelectedNote(null)}>Close</button>
        <button className="btn btn-outline-danger" onClick={deleteNote}>Delete</button>
      </div>
    );
  };

  return (
    <div className="card" style={{ width: "25rem" }}>
        <div className="card-header">Notes</div>
        <div className="card-body">
            <input className="form-control"
            type="text"
            value={noteTitle}
            onChange={e => setNoteTitle(e.target.value)}
            placeholder="Title"
            />
            <textarea className="form-control"
            value={noteContent}
            onChange={e => setNoteContent(e.target.value)}
            placeholder="Note"
            />
            {selectedNote ? (
            <button className="btn btn-primary mr-2" onClick={editNote}>Save</button>
            ) : (
            <button className="btn btn-primary mr-2" onClick={addNote}>Add</button>
            )}
            <ul className="nav navbar-expand-lg bg-body-tertiary">
                {notes.map(renderNoteTitle)}
            </ul>
            {selectedNote && renderNoteContent()}
    </div>
    </div>
  );
};

export default Notes;
