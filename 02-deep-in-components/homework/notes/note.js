import React from 'react';

export class Note extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color}} className="note">
                {this.props.children}
            </div>
        );
    }
}
