import dayjs from "dayjs"

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs)
  const nowDayJs = dayjs()
  if (timestampDayjs.isBefore(nowDayJs)) {
    return {
      seconds: "end",
      minutes: "00",
      hours: "00",
      days: "00",
    }
  }
  return {
    seconds: getRemainingSeconds(nowDayJs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayJs, timestampDayjs),
    hours: getRemainingHours(nowDayJs, timestampDayjs),
    days: getRemainingDays(nowDayJs, timestampDayjs),
  }
}

function getRemainingSeconds(nowDayJs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayJs, "second") % 60
  return padWithZeros(seconds, 2)
}

function getRemainingMinutes(nowDayJs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayJs, "minutes") % 60
  return padWithZeros(minutes, 2)
}

function getRemainingHours(nowDayJs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayJs, "hours") % 24
  return padWithZeros(hours, 2)
}

function getRemainingDays(nowDayJs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayJs, "days")
  return padWithZeros(days, 2)
}

function padWithZeros(number, minLength) {
  const numberString = number.toString()
  if (numberString.length >= minLength) return numberString
  return "0".repeat(minLength - numberString.length) + numberString
}
