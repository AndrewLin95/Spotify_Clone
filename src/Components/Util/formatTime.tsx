import { millisecondsToMinutes } from "date-fns"
import { millisecondsToSeconds } from "date-fns/esm";

const formatTime = (time: number) => {
  let minutes = millisecondsToMinutes(time);
  let seconds = millisecondsToSeconds(time);

  const formattedTime = `${minutes}:${seconds % 60}`;
  return formattedTime;
}

export default formatTime