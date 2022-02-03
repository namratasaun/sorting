import { useEffect, useRef, useState } from 'react';
import css from './ProgressBar.module.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [internalProgress, setInternalProgress] = useState(0);
  const [selectedBar, setSelectedBar] = useState(0);
  const [noOfBars, setNoOfBars] = useState(1);
  const interval = useRef(null);
  const timer = useRef(null);

  const startTimer = () => {
    if (progress === 0) {
      timer.current = setInterval(() => {
        setProgress((prev) => ++prev);
      }, 50);
    }
  };

  useEffect(() => {
    if (progress === 100) {
      clearInterval(timer.current);
    }
  }, [progress]);

  useEffect(() => {
    if (internalProgress === 100) {
      setSelectedBar((prevState) => ++prevState);
      setInternalProgress(0);
      // clearInterval(interval.current);
    }
  }, [internalProgress]);

  const startProgressbar = () => {
    // let delay = (((100 - progress) * 50) / 1000) * noOfBars;
    // console.log(delay);
    startTimer();
    interval.current = setInterval(() => {
      setInternalProgress((prevState) => ++prevState);
    }, 50 / noOfBars);
  };

  const addProgressBars = () => {
    setNoOfBars((prevState) => ++prevState);
    clearInterval(interval.current);
    startProgressbar();
  };

  return (
    <div>
      <p>{progress}%</p>
      <p>{internalProgress}%</p>
      <button onClick={startProgressbar}>Start</button>
      <button onClick={addProgressBars}>Add More Progress Bars</button>
      {Array(noOfBars)
        .fill(0)
        .map((val, ind) => (
          <div className={css.outer}>
            <div
              style={{
                width: `${ind > selectedBar ? '0' : ind < selectedBar ? '100' : internalProgress}%`,
              }}
              className={css.innerFill}
            />
          </div>
        ))}
    </div>
  );
};

export default ProgressBar;
