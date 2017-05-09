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
    
    render() {
        return (
            <div className="note-grid">
                {
                    this.props.notes.map((note) => {
                        return (<Note key={note.id} color={note.color}>{note.text}</Note>);
                    })
                }
            </div>
        );
    }
}
