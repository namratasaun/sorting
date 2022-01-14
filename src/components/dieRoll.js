import { useState } from 'react';
import { getRandomIntInclusive } from '../utils/random';
import css from './dieRoll.module.css';

const die = {
  0: <div>Roll me</div>,
  1: (
    <div className={css.one}>
      <div className={css.dot}></div>
    </div>
  ),
  2: (
    <div className={css.two}>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
    </div>
  ),
  3: (
    <div className={css.three}>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
    </div>
  ),
  4: (
    <div className={css.fourth}>
      <div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
      <div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
    </div>
  ),
  5: (
    <div className={css.fifth}>
      <div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
      <div>
        <div className={css.dot}></div>
      </div>
      <div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
    </div>
  ),
  6: (
    <div className={css.sixth}>
      <div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
      <div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
    </div>
  ),
};

const DieRoll = ({ onDieRoll }) => {
  const [val, setVal] = useState(1);

  const changeDieVal = () => {
    let newVal = getRandomIntInclusive(1, 6);
    setVal(newVal);
    onDieRoll(newVal);
  };

  return (
    <div>
      <div onClick={changeDieVal} className={css.die}>
        {die[val]}
      </div>
    </div>
  );
};

export default DieRoll;
