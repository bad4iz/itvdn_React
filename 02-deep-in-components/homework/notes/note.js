import React from 'react';

export class Note extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color}} className="note">
               <span className="delete-note"
                     onClick={this.props.onDelete}>x</span>
                {this.props.children}
            </div>
        );
    }
}
