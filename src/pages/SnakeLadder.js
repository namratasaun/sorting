import { useRef, useState } from 'react';
import DieRoll from '../components/dieRoll';
import css from './SnakeLadder.module.css';

let board = Array(40).fill(0);

async function sleep(time) {
  await new Promise((next) => {
    setTimeout(() => {
      next();
    }, time);
  });
}

const SnakeLadder = () => {
  const [player, setPlayer] = useState([
    { color: 'red', pos: 1 },
    { color: 'blue', pos: 0 },
  ]);
  const turn = useRef(0);

  const updateTurn = () => {
    if (turn.current === player.length - 1) {
      return (turn.current = 0);
    }
    return (turn.current = turn.current + 1);
  };

  async function onDieRoll(dieVal) {
    console.log(dieVal);
    console.log(turn.current);
    let arr = [...player];
    console.log(player);
    for (let i = 0; i < dieVal; i++) {
      arr[turn.current].pos = arr[turn.current].pos + 1;
      setPlayer([...arr]);
      await sleep(200);
    }
    updateTurn();
  }

  const makePlayer = (index) => {
    let arr = [];
    player.forEach((val) => {
      if (val.pos === index) {
        arr.push({ ...val });
      }
    });
    return arr;
  };
  return (
    <div className={css.outer}>
      {board.map((val, ind) => (
        <div className={css.block}>
          {ind}
          <div>
            {makePlayer(ind).map((val) => (
              <div className={css.player} style={{ backgroundColor: val.color }}></div>
            ))}
          </div>
        </div>
      ))}
      <DieRoll onDieRoll={onDieRoll} />
    </div>
  );
};

export default SnakeLadder;
