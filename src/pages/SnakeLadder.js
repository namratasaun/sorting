import { useRef, useState, useEffect } from 'react';
import DieRoll from '../components/dieRoll';
import makeBoard from '../utils/snakeBoard';
import css from './SnakeLadder.module.css';

let { board, snakes, ladders } = makeBoard(100);

const getOffset = (el) => {
  console.log(el);
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    width: rect.width || el.offsetWidth,
    height: rect.height || el.offsetHeight,
  };
};

const connect = (div1, div2, color, thickness) => {
  console.log(div1, div2);
  const off1 = getOffset(div1);
  const off2 = getOffset(div2);

  const x1 = off1.left + off1.width / 2;
  const y1 = off1.top + off1.height / 2;

  const x2 = off2.left + off2.width / 2;
  const y2 = off2.top + off2.height / 2;

  const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

  const cx = (x1 + x2) / 2 - length / 2;
  const cy = (y1 + y2) / 2 - thickness / 2;

  const angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);

  // const htmlLine =
  //   "<div style='padding:0px; margin:0px; height:" +
  //   thickness +
  //   'px; background-color:' +
  //   color +
  //   '; line-height:1px; position:absolute; left:' +
  //   cx +
  //   'px; top:' +
  //   cy +
  //   'px; width:' +
  //   length +
  //   'px; -moz-transform:rotate(' +
  //   angle +
  //   'deg); -webkit-transform:rotate(' +
  //   angle +
  //   'deg); -o-transform:rotate(' +
  //   angle +
  //   'deg); -ms-transform:rotate(' +
  //   angle +
  //   'deg); transform:rotate(' +
  //   angle +
  //   "deg);' />";

  var line = document.createElement('div');
  line.style.padding = 0;
  line.style.margin = 0;
  line.style.height = `${thickness}px`;
  line.style.backgroundColor = color;
  line.style.lineHeight = '1px';
  line.style.position = 'absolute';
  line.style.left = `${cx}px`;
  line.style.top = `${cy}px`;
  line.style.width = `${length}px`;
  line.style.left = `${cx}px`;
  line.style.transform = `rotate(${angle}deg)`;

  // document.getElementById('root').innerHTML += htmlLine;
  document.getElementById('root').appendChild(line);
};

const move = (div1, div2, color, snake) => {
  const off1 = getOffset(div1);
  const off2 = getOffset(div2);

  const x1 = off1.left + off1.width / 2;
  const y1 = off1.top + off1.height / 2;

  const x2 = off2.left + off2.width / 2;
  const y2 = off2.top + off2.height / 2;

  document.getElementById(`player-${color}`).style.transform = `translate(${x2 - x1}px,${
    y2 - y1
  }px)`;
};

async function sleep(time) {
  await new Promise((next) => {
    setTimeout(() => {
      next();
    }, time);
  });
}

const SnakeLadder = () => {
  const [player, setPlayer] = useState([
    { color: 'red', pos: 0 },
    { color: 'blue', pos: 0 },
  ]);
  const turn = useRef(0);
  const [isTurnOver, setIsTurnOver] = useState(false);
  const [blockDice, setBlockDice] = useState(false);

  const updateTurn = () => {
    setBlockDice(false);
    if (turn.current === player.length - 1) {
      return (turn.current = 0);
    }
    return (turn.current = turn.current + 1);
  };

  let updatePositionForSnakeOrLadder = (whereToMove) => {
    let arr = [...player];
    arr[turn.current].pos = whereToMove;
    setPlayer([...arr]);
  };

  useEffect(() => {
    let checkIfLadderOrSnake = async () => {
      let arr = [...player];
      if (board[arr[turn.current].pos].snakeEnds) {
        move(
          document.getElementById(arr[turn.current].pos),
          document.getElementById(board[arr[turn.current].pos].snakeEnds),
          player[turn.current].color
        );
        await sleep(2000);
        return updatePositionForSnakeOrLadder(board[arr[turn.current].pos].snakeEnds);
      }

      if (board[arr[turn.current].pos].ladderEnds) {
        // await sleep(2000);
        move(
          document.getElementById(arr[turn.current].pos),
          document.getElementById(board[arr[turn.current].pos].ladderEnds),
          player[turn.current].color
        );
        await sleep(2000);
        return updatePositionForSnakeOrLadder(board[arr[turn.current].pos].ladderEnds);
      }

      // move(document.getElementById(1), document.getElementById(4));

      updateTurn();
    };
    if (isTurnOver) {
      checkIfLadderOrSnake();
    }
  }, [player, isTurnOver]);

  async function onDieRoll(dieVal) {
    setBlockDice(true);
    setIsTurnOver(false);
    let arr = [...player];

    for (let i = 0; i < dieVal; i++) {
      arr[turn.current].pos = arr[turn.current].pos + 1;
      setPlayer([...arr]);
      await sleep(200);
    }

    setIsTurnOver(true);
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

  const makeAlternatingBoard = () => {
    let temp = [];
    for (let i = 0; i < 100; i += 10) {
      temp.push(
        <div className={css.unitRow}>
          {Array(10)
            .fill(0)
            .map((val, ind) => (
              <div className={css.unitBlock} id={board[i + ind].value}>
                {board[i + ind].value}
                <div className={css.allPlayers}>
                  {makePlayer(board[i + ind].value).map((val) => (
                    <div
                      id={`player-${val.color}`}
                      className={css.player}
                      style={{ backgroundColor: val.color }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      );
    }
    return temp;
  };

  useEffect(() => {
    snakes.map((snake) => {
      connect(document.getElementById(snake.start), document.getElementById(snake.end), 'red', 3);
    });
    ladders.map((ladder) => {
      connect(
        document.getElementById(ladder.start),
        document.getElementById(ladder.end),
        'green',
        3
      );
    });
  }, []);

  return (
    <>
      <div className={css.outer}>{makeAlternatingBoard()}</div>
      <DieRoll onDieRoll={onDieRoll} blockDice={blockDice} />
    </>
  );
};

export default SnakeLadder;
