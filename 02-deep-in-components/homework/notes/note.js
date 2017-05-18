import React from 'react';
import {Timer} from './timer';

export class Note extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props);
    }

    setTimer(seconds) {
        this.props.onTimer.bind(null, seconds)();
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.color}} className="note">
               <span className="delete-note"
                     onClick={this.props.onDelete}>x</span>
                <p>{this.props.children}</p>
                <Timer
                    onTimer={this.setTimer.bind(this)}
                    time={this.props.time}
                />
            </div>
        );
    }
}
