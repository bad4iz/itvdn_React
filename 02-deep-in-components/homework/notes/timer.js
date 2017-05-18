import React from 'react';

export class Timer extends React.Component {

    constructor(props) {

        super(props);
        // console.log(this.props);
        this.state = {
            seconds: this.props.time || 0,
            tim: false
        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    tick() {
        this.setState({seconds: this.state.seconds + 1});
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        alert('объект удален');
    }

    clearTimer() {
        this.setState({seconds: 0});
        this.props.onTimer(0);
    }

    switchTimer() {
        this.timer = setInterval(this.tick.bind(this), 1000);
        this.switch();
    }

    pauseTimer() {
        clearInterval(this.timer);
        this.switch();
        this.props.onTimer(this.state.seconds);
    }

    switch() {
        this.setState({
            tim: !this.state.tim
        });
    }

    render() {
        return (
            <div >
                <h4> Уже прошло {this.state.seconds} секунд </h4>
                <button  className="timer red" onClick={this.clearTimer.bind(this)} >Clear</button>
                <button   className="timer green" onClick={this.state.tim ? this.pauseTimer.bind(this) : this.switchTimer.bind(this) }>{this.state.tim ? 'Pause' : 'Play' }</button>
            </div>
        );
    }
}
