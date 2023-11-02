import { useEffect, useState } from "react";
import { SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from "../../assets/constants";

interface UseAnalogClock {
  date: Date,
  handsStyles: HandsStyles
}

interface HandsStyles {
  secondHandStyle: {},
  minuteHandStyle: {},
  hourHandStyle: {}
}

const initialState: HandsStyles = { secondHandStyle: {}, minuteHandStyle: {}, hourHandStyle: {} }

const useAnalogClock = (): UseAnalogClock => {
  const [handsStyles, setHandsStyles] = useState<HandsStyles>(initialState)
  const [date] = useState(new Date())

  useEffect(() => {
    setHandsStyles({
      secondHandStyle: {
        animationDelay: `-${date.getSeconds()}s`
      },
      minuteHandStyle: {
        animationDelay: `-${date.getMinutes() * SECONDS_IN_MINUTE}s`
      },
      hourHandStyle: {
        animationDelay: `-${date.getHours() * SECONDS_IN_HOUR}s`
      },
    })
  }, []);

  return { date, handsStyles }
}

export { useAnalogClock }