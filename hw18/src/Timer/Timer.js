import './Timer.css';
import { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
    }
    this.intervalFunction = null;
    this.isIntervalStop = true;
    this.onTick = this.props.onTick;
    this.autostart = this.props.autostart;
    this.intervalNumber = this.props.intervalNumber;
    this.onTimeEnd = this.props.onTimeEnd;
    this.onTimeStart = this.props.onTimeStart;
  }

  componentDidMount() {
    if (this.autostart) {
      this.startTimer();
    }
  }

  stopTimer() {
    this.isIntervalStop = true;
    clearInterval(this.intervalFunction);
  }

  ontickRealisation() {
    const initialTime = this.props.time;
    if (initialTime === this.state.time) {
      this.onTimeStart();
    }
    if (!this.isIntervalStop) {
      this.onTick(this.formatTime(this.state.time));
    }
    if (this.state.time === 0) {
      this.onTimeEnd();
      this.setState({ time: initialTime + 1})
    }
  }
 
  startTimer() {
    clearInterval(this.intervalFunction);
    this.isIntervalStop = false;
    this.intervalFunction = setInterval(() => {
      this.setState(prevState => {
        if (prevState.time === 0) {
          this.stopTimer();
          return null;
        }
        return { time: prevState.time - 1 };
      }, this.ontickRealisation());
      this.changeWidth();
    }, this.intervalNumber)
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  changeWidth() {
    const initialTime = this.props.time;
    const progress = (this.state.time / initialTime) * 100;
    return progress
  }

  render() {
    return (
        <section>
          <div className='progressBar-container'>
            <div className='progressBar' style={{ width: this.changeWidth() + '%'}}>
            </div>
          </div>
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