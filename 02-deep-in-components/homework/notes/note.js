import React from 'react';
import {Timer} from './timer';

export class Note extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color}} className="note">
               <span className="delete-note"
                     onClick={this.props.onDelete}>x</span>
                <p> {this.props.children}</p>
                <Timer />
            </div>
        );
    }
}
