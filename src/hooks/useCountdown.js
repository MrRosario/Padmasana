import { useEffect, useState } from "react";

const useCountdown = ({
  readyMin,
  readySec,
  durMin,
  durSec,
  isPlaying,
  setIsPlaying,
  setEnableClose,
}) => {
  const [minutes, setMinutes] = useState(readyMin);
  const [seconds, setSeconds] = useState(readySec);
  const [isCountdownPlaying, setIsCountdownPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        clearInterval(interval);
        setIsCountdownPlaying(false);
        setEnableClose(false);
        return;
      }
      if (seconds === 0 && minutes === 0) {
        setMinutes(0);
        setSeconds(0);
        setIsPlaying(false);
        setIsCountdownPlaying(false);
        setEnableClose(false);
        clearInterval(interval);
        return;
      }
      if (seconds <= 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
        setEnableClose(false);
        setIsCountdownPlaying(true);
        return;
      }
      setSeconds(seconds - 1);
      setIsCountdownPlaying(true);
    }, 1000);
    return () => clearInterval(interval);
  });

  return { minutes, seconds, isCountdownPlaying };
};

// const useCountdown = (targetDate) => {
//   const countDownDate = new Date(targetDate).getTime();

//   const [countDown, setCountDown] = useState(
//     countDownDate - new Date().getTime()
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountDown(countDownDate - new Date().getTime());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [countDownDate]);

//   return getReturnValues(countDown);
// };

// const getReturnValues = (countDown) => {
//   // calculate time left
//   const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

//   return [minutes, seconds];
// };

export { useCountdown };
