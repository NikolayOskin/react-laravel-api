import React, { Component } from 'react';
import { timestrToSec, secondsToTime } from "./functions";

class Timetracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalTime: this.props.time,
            hours: 0,
            minutes: 0,
            seconds: 0,
            interval: 0,
            started: false,
        };
        this.startTracker = this.startTracker.bind(this);
        this.stopTracker = this.stopTracker.bind(this);
        this.formatTime = this.formatTime.bind(this);
    };
    startTracker() {
        this.setState({
            started: true,
            interval: setInterval( () => {
                let seconds = this.state.seconds;
                let minutes = this.state.minutes;
                let hours = this.state.hours;

                if (seconds < 59) {
                    seconds++;
                    this.setState({
                        seconds: seconds
                    });
                } else if (minutes < 59) {
                    minutes++;
                    this.setState({
                        seconds: 0,
                        minutes: minutes
                    });
                } else {
                    hours++;
                    this.setState({
                        hours: hours,
                        minutes: 0,
                        seconds: 0
                    })
                }
            }, 1000)
        });
    }
    stopTracker() {
        clearInterval(this.state.interval);
        let trackedTime = this.formatTime(this.state.hours)+':'
            +this.formatTime(this.state.minutes)+':'
            +this.formatTime(this.state.seconds);
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0,
            totalTime: secondsToTime(timestrToSec(this.state.totalTime) + timestrToSec(trackedTime)),
            started: false,
        });
    }
    formatTime(value) {
        return ("0" + value).slice(-2);
    }
    render() {
        const hours = this.formatTime(this.state.hours);
        const minutes = this.formatTime(this.state.minutes);
        const seconds = this.formatTime(this.state.seconds);

        return (
                <div>
                    <h4 className="mt-4">Затраченное время:</h4>
                    <div>
                        <h5>{this.state.totalTime}</h5>
                    </div>

                    <h4 className="mt-5">Тайм-трекер:</h4>
                    <div>
                        <h5>{hours}:{minutes}:{seconds}</h5>
                    </div>

                    <button className="btn btn-primary mt-2"
                            onClick={this.state.started ? this.stopTracker : this.startTracker}>
                        {this.state.started ? 'Стоп' : 'Старт'}
                    </button>
                </div>
        );
    }
}

export default Timetracker;
