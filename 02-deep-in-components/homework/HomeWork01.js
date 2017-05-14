import React from 'react';
import ReactDOM from 'react-dom';
import {NoteEditor} from './notes/noteEditor';
import {NotesGrid} from './notes/notesGrid';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            notes: [
            ]
        };
    }

    componentDidMount() {
        const localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({notes: localNotes});
        }
    }
    
    componentDidUpdate() {
        this._updateLocalStorage();
    }
    
    handleNoteDelete(noted) {
        const noteId = noted.id;
        
        const newNotes = this.state.notes.filter((note) => {
            return note.id !== noteId;
        });
        this.setState({notes: newNotes});
    }
    
    handleNoteAdd(newNote) {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }
    
    render() {
        return (
           <div className="notes-app">
               NoteApp
               <NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)}/>
               <NotesGrid notes={this.state.notes}
               onNoteDelete={this.handleNoteDelete.bind(this)}/>
           </div>
        );
    }
    
    _updateLocalStorage() {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}

ReactDOM.render(
    <NotesApp />,
    document.getElementById('notes')
);
