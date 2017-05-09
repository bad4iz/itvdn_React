import React from 'react';
import ReactDOM from 'react-dom';
import {NoteEditor} from './notes/noteEditor';
import {NotesGrid} from './notes/notesGrid';

class NotesApp extends React.Component {
    render() {
        return (
           <div className="notes-app">
               NoteApp
               <NoteEditor/>
               <NotesGrid/>
           </div>
        );
    }
}

ReactDOM.render(
    <NotesApp />,
    document.getElementById('notes')
);
