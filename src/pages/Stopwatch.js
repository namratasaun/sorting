import { useEffect, useRef, useState } from 'react';
import css from './stopwatch.module.css';
import { zeroPad } from '../utils/date';

const Stopwatch = () => {
  const [nanoSeconds, setNanoSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const watch = useRef();

  const timer = () => {
    watch.current = setInterval(() => {
      setNanoSeconds((prevState) => prevState + 1);
    }, 10);
    setIsTimerStarted(true);
  };

  const stopTimer = () => {
    clearInterval(watch.current);
    setIsTimerStarted(false);
  };

  useEffect(() => {
    if (nanoSeconds === 100) {
      setNanoSeconds(0);
      setSeconds((prevState) => prevState + 1);
    }
  }, [nanoSeconds]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevState) => prevState + 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((prevState) => prevState + 1);
    }
  }, [minutes]);

  useEffect(() => {
    if (hours === 24) {
      setHours(0);
      setDays((prevState) => prevState + 1);
    }
  }, [hours]);

  const stopHandler = () => {
    stopTimer();
  };

  const startHandler = () => {
    timer();
  };

  const resetHandler = () => {
    stopTimer();
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setNanoSeconds(0);
  };

  return (
    <div className={css.outer}>
      <p className={css.days}>{days} d</p>
      <div className={css.time}>
        <p>{zeroPad(hours)} h</p>
        <span>:</span>
        <p>{zeroPad(minutes)} m</p>
        <span>:</span>
        <p>{zeroPad(seconds)} s</p>
        <p className={css.nanoSeconds}>{zeroPad(nanoSeconds)}</p>
      </div>
      {isTimerStarted ? (
        <button onClick={stopHandler}>Stop</button>
      ) : (
        <button onClick={startHandler}>Start</button>
      )}
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Stopwatch;
