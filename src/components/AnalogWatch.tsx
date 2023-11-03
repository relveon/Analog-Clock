import React from "react"
import { useSelector } from "react-redux";

import { useAnalogClock, useFollowingMouseTooltip, } from "../hooks";

import { RootState } from "../store";

const AnalogWatch: React.FC = () => {
  const tooltipCoordinates = useSelector<RootState>((state) => state.tooltipCoordinates)
  const { ref, isHovered } = useFollowingMouseTooltip()
  const { date, handsStyles } = useAnalogClock()

  const secondMarks = Array.from({ length: 60 }, (_, index) => (
    <span key={index}><p/></span>
  ))

  const minuteMarks = Array.from({ length: 12 }, (_, index) => (
    <span key={index}><p/></span>
  ))

  return (
    <div className="watch">
      <div className="watch-container">

        <div className="watch-container-hands-box">
          <div className="hand hours animate" style={handsStyles.hourHandStyle}></div>
          <div className="hand minutes animate" style={handsStyles.minuteHandStyle}></div>
          <div className="hand seconds animate" style={handsStyles.secondHandStyle}></div>
          
          <div className="pin"/>

        </div>

        <div className="bar-seconds">
          {secondMarks}
        </div>
        <div className="bar-minutes">
          {minuteMarks}
        </div>
      </div>
      <div className="watch-background"/>
      <div ref={ref} className="watch-face">
        {
          isHovered &&
            <div className="watch-face-digital-tooltip" style={tooltipCoordinates}>
                <span>{date.toLocaleTimeString()}</span>
            </div>
        }
      </div>
    </div>
  )
}

export default AnalogWatch;