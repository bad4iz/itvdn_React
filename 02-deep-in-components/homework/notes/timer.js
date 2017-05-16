import React from 'react';

export class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
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
    }

    switchTimer() {
        console.log('switchTimer');
        this.timer = setInterval(this.tick.bind(this), 1000);
        this.setState({
            tim: !this.state.tim
        });
    }

    pauseTimer() {
        console.log('pauseTimer');
        clearInterval(this.timer);
        this.switch();
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
                <button onClick={this.clearTimer.bind(this)} >Сбросить</button>
                <button  onClick={this.state.tim ? this.pauseTimer.bind(this) : this.switchTimer.bind(this) }>{this.state.tim ? 'Пауза' : 'Запустить' }</button>
            </div>
        );
    }
}
