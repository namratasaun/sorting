import { useCallback, useEffect, useState } from 'react';
import Action from '../components/action';
import css from './sorting.module.css';

async function sleep(time) {
  await new Promise((next) => {
    setTimeout(() => {
      next();
    }, time);
  });
}

const startingValues = [5, 1, 4, 2, 8];

function Sorting() {
  const [showAction, setShowAction] = useState(false);
  const [picked, setPicked] = useState([]);
  const [initialArr, setInitialArr] = useState([...startingValues]);

  let closeAction = useCallback(() => setShowAction(false), []);

  async function swap(currentArr, s, t) {
    setShowAction(true);
    await sleep(1000);
    let temp = currentArr[s];
    currentArr[s] = currentArr[t];
    currentArr[t] = temp;
    // setArr(currentArr);
    setInitialArr([...currentArr]);
    await sleep(1000);
  }

  // useEffect(() => {
  //   console.log(initialArr);
  // }, [initialArr]);

  useEffect(() => {
    let arr = [...startingValues];
    (async function foo() {
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
          console.log('stop');
          console.log(arr);
          setPicked([j, j + 1]);
          await sleep(1000);
          if (arr[j] > arr[j + 1]) {
            await swap(arr, j, j + 1);
          }
        }
      }
    })();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {showAction ? <Action text='Swap' close={closeAction} /> : null}
      {initialArr.map((val, ind) => (
        <div className={`${css.all} ${picked.includes(ind) ? css.picked : ''}`}>{val}</div>
      ))}
    </div>
  );
}

export default Sorting;
