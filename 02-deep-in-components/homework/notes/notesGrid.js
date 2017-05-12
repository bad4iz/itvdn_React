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
        return (
            <div className="note-grid" ref="grid">
                {
                    this.props.notes.map((note) => {
                        return (<Note key={note.id} color={note.color}>{note.text}</Note>);
                    })
                }
            </div>
        );
    }
}
