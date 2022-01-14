import { useState } from 'react/cjs/react.development';
import css from './action.module.css';

const Action = ({ text, close }) => {
  useState(() => {
    setTimeout(() => {
      close();
    }, 500);
  }, []);

  return (
    <div className={css.backdrop}>
      <div className={css.action}>{text}</div>
    </div>
  );
};

export default Action;
