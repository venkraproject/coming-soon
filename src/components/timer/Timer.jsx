import React from 'react'
import './timer.css'

const Timer = () => {
  return (
    <section id='timer'> 
      <div class="launch-time">
        <div>
          <p id="days">00</p>
          <span>Days</span>
        </div>
        <div>
          <p id="hours">00</p>
          <span>Hours</span>
        </div>
        <div>
          <p id="minutes">00</p>
          <span>Minutes</span>
        </div>
        <div>
          <p id="seconds">00</p>
          <span>Seconds</span>
        </div>
      </div>
		</section>
  )
}

export default Timer