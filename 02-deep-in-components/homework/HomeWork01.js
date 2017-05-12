import React from 'react';
import ReactDOM from 'react-dom';
import {NoteEditor} from './notes/noteEditor';
import {NotesGrid} from './notes/notesGrid';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            notes: [
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum fugiat minima sed similique. Aliquid beatae commodi dignissimos dolore ducimus, enim fugiat nostrum vitae! Deleniti nihil perferendis quasi ratione voluptatem!',
                    color: '#208600'
                },
                {
                    id: 2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum fugiat minima sed similique. Aliquid beatae commodi dignissimos dolore ducimus, enim fugiat nostrum vitae! Deleniti nihil perferendis quasi ratione voluptatem!',
                    color: '#862713'
                },
                {
                    id: 3,
                    text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum fugiat minima sed similique. Aliquid beatae commodi dignissimos dolore ducimus, enim fugiat nostrum vitae! Deleniti nihil perferendis quasi ratione voluptatem!sit amet, consectetur adipisicing elit. Cum dolorum fugiat minima sed similique. Aliquid beatae commodi dignissimos dolore ducimus, enim fugiat nostrum vitae! Deleniti nihil perferendis quasi ratione voluptatem!',
                    color: '#862554'
                },
                {
                    id: 4,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum fugiat minima sed similique. Aliquid beatae commodi dignissimos dolore ducimus, enim fugiat nostrum vitae! Deleniti nihil perferendis quasi ratione voluptatem!',
                    color: '#cfd000'
                }
            ]
        };
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
               <NotesGrid notes={this.state.notes}/>
           </div>
        );
    }
}

ReactDOM.render(
    <NotesApp />,
    document.getElementById('notes')
);
