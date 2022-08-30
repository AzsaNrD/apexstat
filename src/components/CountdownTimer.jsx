import { useEffect, useState } from "react"
import { getRemainingTimeUntilMsTimestamp } from "../Utils/CountdownTimerUtils"

const defaultRemainingTime = {
  seconds: "end",
  minutes: "end",
  hours: "00",
  days: "00",
}

const CountdownTimer = ({ countdownTimesMs, getRefreshTime, handleTime }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimesMs)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [countdownTimesMs])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  if (remainingTime.seconds === "reset") {
    console.log("mengirim request reset...")
    handleTime(getRefreshTime)
  }

  return (
    <div className="text-slate-300">
      {remainingTime.seconds !== "end" ? (
        <div className="justify-center flex gap-1">
          {remainingTime.days !== "00" && (
            <div className="flex gap-1">
              <span className="two-numbers">{remainingTime.days}</span>
              <span>Days</span>
            </div>
          )}
          {remainingTime.hours !== "00" && (
            <div className="flex gap-1">
              <span className="two-numbers">{remainingTime.hours}</span>
              <span>Hours</span>
            </div>
          )}

          {remainingTime.minutes !== "end" && (
            <div className="flex gap-1">
              <span className="two-numbers">{remainingTime.minutes}</span>
              <span>Minutes</span>
            </div>
          )}
          {remainingTime.seconds !== "end" && (
            <div className="flex gap-1">
              <span className="two-numbers">{remainingTime.seconds}</span>
              <span>Seconds</span>
            </div>
          )}
        </div>
      ) : (
        <p className="animate-pulse uppercase">Map has rotated</p>
      )}
    </div>
  )
}

export default CountdownTimer
