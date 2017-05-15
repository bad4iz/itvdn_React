import React from 'react';
import {ColorInput} from './colorInput';

export class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: '',
            backgroundColor: 'yellow'
        };
    }
    
    handleTextChange(event) {
        this.setState({text: event.target.value});
        console.log(this.text);
    }

    handleChangeColor(color) {
        this.setState({
            backgroundColor: color
        });
    }

    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };
        this.setState({text: ''});
        
        this.props.onNoteAdd(newNote);
    }
    
    render() {
        return (
            <div style={{backgroundColor: this.state.backgroundColor}} className="note-editor">
                <ColorInput backgroundColorHandle={this.handleChangeColor.bind(this)}/>
                <textarea style={{backgroundColor: this.state.backgroundColor}}
                    placeholder="Enter you note here"
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <button
                    className="add-button"
                    onClick={this.handleNoteAdd.bind(this)}
                >Add
                </button>
            </div>
        );
    }
}
