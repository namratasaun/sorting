import { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [nanoSeconds, setNanoSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNanoSeconds((prevState) => prevState + 1);
    }, 10);
  }, []);

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

  return (
    <div>
      <p>{days}</p>
      <p>{hours}</p>
      <p>{minutes}</p>
      <p>{seconds}</p>
      <p>{nanoSeconds}</p>
    </div>
  );
};

export default Stopwatch;
