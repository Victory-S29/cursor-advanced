import './Timer.css';
import { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time:  this.props.time,
    }   
    this.stopInterval = null;
    this.isIntervalStop = true;
    this.onTick = this.props.onTick;
    this.autostart = this.props.autostart;
    this.intervalNumber = this.props.intervalNumber
  }

  componentDidMount() {
    if (this.autostart) {
      this.startTimer();
    }
  }

  stopTimer() {
    this.isIntervalStop = true;
    clearInterval(this.stopInterval);
    this.stopInterval = null;
  }

  startTimer() {
    clearInterval(this.stopInterval);
    this.isIntervalStop = false;
    this.stopInterval = setInterval(() => {
      this.setState(prevState => {
        if (prevState.time === 0) {
          this.stopTimer();
          return null;
        }
        return { time: prevState.time - 1 };
      }, () => {
        if (!this.isIntervalStop) {
          this.onTick(this.formatTime(this.state.time));
        }
      });
    }, this.intervalNumber)
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  render() {
    console.log('time:', this.state.time);
    return (
      <section> 
        <h1 className='timer-h1'>Timer</h1>
        <p className='time-show'>{this.formatTime(this.state.time)}</p>
        <button className='btn-timer' onClick={() => {
          this.autostart = false;
          if (this.isIntervalStop) {
            this.startTimer()
          } else {
            this.stopTimer()
          }
        }}> Start/Stop</button>
      </section>
      )
  }
}