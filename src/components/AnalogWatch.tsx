import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";

import { useFollowingMouseTooltip } from "../hooks";

import {
  DEGREES_PER_HOUR,
  DEGREES_PER_MINUTE, DEGREES_PER_SECOND,
  HOURS_DEGREES_PER_MINUTE_TICK,
  MINUTES_DEGREES_PER_SECOND_TICK
} from "../assets/constants";
import { RootState } from "../store";

const AnalogWatch: React.FC = () => {
  const tooltipCoordinates = useSelector((state: RootState) => state.tooltipCoordinates)

  const [date, setDate] = useState(new Date())
  const { ref, isHovered } = useFollowingMouseTooltip()

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hoursDegrees = date.getHours() * DEGREES_PER_HOUR + date.getMinutes() * HOURS_DEGREES_PER_MINUTE_TICK;
  const minutesDegrees = date.getMinutes() * DEGREES_PER_MINUTE + date.getSeconds() * MINUTES_DEGREES_PER_SECOND_TICK;
  const secondsDegrees = date.getSeconds() * DEGREES_PER_SECOND;

  const secondHandStyle = {
    transform: `rotate(${secondsDegrees}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${minutesDegrees}deg)`,
  };

  const hourHandStyle = {
    transform: `rotate(${hoursDegrees}deg`,
  };

  const secondMarks = Array.from({ length: 60 }, (_, index) => (
    <span key={index}><p/></span>
  ))

  const minuteMarks = Array.from({ length: 12 }, (_, index) => (
    <span key={index}><p/></span>
  ))

  return (
    <div className="watch">
      <div className="watch-container">

        <div className={`hour-hand ${date.getHours() === 0 ? "" : "transition-effect"}`}
             style={hourHandStyle}><i/></div>

        <div className={`minute-hand ${date.getMinutes() === 0 ? "" : " transition-effect"}`}
             style={minuteHandStyle}><i/></div>

        <div className={`second-hand ${date.getSeconds() === 0 ? "" : "transition-effect"}`}
             style={secondHandStyle}><i/></div>

        <div className="bar-seconds">
          {secondMarks}
        </div>
        <div className="bar-minutes">
          {minuteMarks}
        </div>

      </div>
      <div ref={ref} className="watch-background">
        {
          isHovered &&
            <div className="watch-background-digital-tooltip" style={tooltipCoordinates}>
                <span>{date.toLocaleTimeString()}</span>
            </div>
        }
      </div>
    </div>
  )
}

export default AnalogWatch;