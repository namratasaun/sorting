import { useEffect } from 'react';
import css from './action.module.css';

const Action = ({ text, close }) => {
  useEffect(() => {
    setTimeout(() => {
      close();
    }, 500);
  }, [close]);

  return (
    <div className={css.backdrop}>
      <div className={css.action}>{text}</div>
    </div>
  );
};

export default Action;
