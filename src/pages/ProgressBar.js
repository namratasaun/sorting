import { useEffect, useRef, useState } from 'react';
import css from './ProgressBar.module.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [selectedBar, setSelectedBar] = useState(0);
  const interval = useRef;

  useEffect(() => {
    if (progress === 100) {
      setSelectedBar((prevState) => ++prevState);
      setProgress(0);
      // clearInterval(interval.current);
    }
  }, [progress]);

  const startProgressbar = () => {
    interval.current = setInterval(() => {
      setProgress((prevState) => ++prevState);
    }, 50);
  };

  return (
    <div>
      <p>{progress}%</p>
      {Array(3)
        .fill(0)
        .map((val, ind) => (
          <div className={css.outer}>
            <div
              style={{
                width: `${ind > selectedBar ? '0' : ind < selectedBar ? '100' : progress}%`,
              }}
              className={css.innerFill}
            />
          </div>
        ))}

      <button onClick={startProgressbar}>Start</button>
      <button>Add More Progress Bars</button>
    </div>
  );
};

export default ProgressBar;
