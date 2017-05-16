import React from 'react';

export class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            timer:'',
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
        clearInterval(this.timer);
    }

    switchTimer() {
        console.log('switchTimer');
        this.switch();
        this.setState({
            timer: setInterval(this.tick.bind(this), 1000)
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
                <button onClick={this.clearTimer} >Сбросить</button>
                <button  onClick={this.state.tim ? this.switchTimer : this.pauseTimer }>{this.state.tim ? 'Запустить' : 'Пауза'}</button>
            </div>
        );
    }
}
