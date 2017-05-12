import React from 'react';

export class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: ''
        };
    }
    
    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }
    
    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };
        this.props.onNoteAdd(newNote);
    }
    
    render() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter you note here"
                    rows={5}
                    className="textarea"
                    onChange={this.handleTextChange.bind(this)}
                />
                <button
                    className="add-button"
                    onClick={this.handleNoteAdd.bind(this)}
                >Add</button>
            </div>
        );
    }
}
