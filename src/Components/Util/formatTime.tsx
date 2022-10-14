import { millisecondsToMinutes } from "date-fns"
import { millisecondsToSeconds } from "date-fns/esm";

const formatTime = (time: number) => {
  let minutes = millisecondsToMinutes(time);
  let seconds = millisecondsToSeconds(time);

  let unformattedSeconds = seconds % 60;
  let formattedSeconds

  if (unformattedSeconds < 10) {
    formattedSeconds = `0${unformattedSeconds}`;
  } else {
    formattedSeconds = unformattedSeconds;
  }

  const formattedTime = `${minutes}:${formattedSeconds}`;
  return formattedTime;
}

export default formatTime