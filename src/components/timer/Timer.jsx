import React, { Component } from 'react'
import './timer.css'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state =
    {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      time_up: ""

    };
    this.x= null;
    this.LDate=null;
  }
  count() {
    let timeNow = new Date().getTime();
    let difTime = this.LDate - timeNow;
    let dd = Math.floor(difTime / (1000 * 60 * 60 * 24));
    let hh = Math.floor((difTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mm = Math.floor((difTime % (1000 * 60 * 60)) / (1000 * 60));
    let ss = Math.floor((difTime % (1000 * 60)) / (1000));
    
    let days= dd<10 ? "0" + dd:dd;
    let hours= hh<10 ? "0" + hh:hh;
    let mins= mm<10 ? "0" + mm:mm;
    let secs= ss<10 ? "0" + ss:ss;

    this.setState({ days, hours, mins, secs });

    /*Primo inutil 0 antes */

    this.setState({days,hours,mins,secs});


  }
  componentDidMount() {
    this.LDate = new Date("Jul 30, 2022 16:00:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, hours, mins, secs } = this.state;
    return (
      <section id='timer'>
        <div class="launch-time">
          <div>
            <p id="days">{days}</p>
            <span>Days</span>
          </div>
          <div>
            <p id="hours">{hours}</p>
            <span>Hours</span>
          </div>
          <div>
            <p id="minutes">{mins}</p>
            <span>Minutes</span>
          </div>
          <div>
            <p id="seconds">{secs}</p>
            <span>Seconds</span>
          </div>
        </div>
      </section>
    )
  }
}

export default Timer;