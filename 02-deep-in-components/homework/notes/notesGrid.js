import React from 'react';
import {Note} from './note';

export class NotesGrid extends React.Component {
    
    componentDidMount() {
        const grid = this.refs.grid;
        this.msnry = new Masonry(grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        const onNotesDelete = this.props.onNoteDelete;
        const onNoteTimer = this.props.onNoteTimer;
        return (
            <div className="note-grid" ref="grid">
                {
                    this.props.notes.map(function(note, idx) {
                        console.log(note.seconds);
                        return (
                            <Note
                            key={idx}
                            onDelete={onNotesDelete.bind(null, note)}
                            color={note.color}
                            // onTimer={onNoteTimer.bind(null, note)}
                            // time = {note.seconds}
                            >
                            {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        );
    }
}
