import React, { useEffect, useRef, useState } from 'react';

export default function useCountDown(seconds = 0, initSeconds = 0) {
  const [countDownTime, setCountDownTime] = useState<number>(seconds);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const reset = () => {
    setCountDownTime(initSeconds);
  };

  useEffect(() => {
    if (countDownTime <= 0) clearInterval(timer.current as NodeJS.Timeout);
  }, [countDownTime]);

  useEffect(() => {
    if (seconds > 0) {
      setCountDownTime(seconds);

      timer.current = setInterval(() => {
        setCountDownTime(oldValue => oldValue - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer.current as NodeJS.Timeout);
    };
  }, []);

  return {
    useCountDownValue: countDownTime,
    useCountDownSetter: setCountDownTime,
    useCountDownTimer: timer,
    useCountDownReset: reset,
  };
}