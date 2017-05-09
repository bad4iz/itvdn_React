import React from 'react';
import {Note} from './note';

export class NotesGrid extends React.Component {
    render() {
        return (
            <div className="note-grid">
                NoteGrid
                <Note/>
                <Note/>
                <Note/>
            </div>
        );
    }
}
