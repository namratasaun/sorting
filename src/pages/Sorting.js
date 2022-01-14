import { useEffect, useState } from 'react';
import Action from '../components/action';
import css from './sorting.module.css';

async function sleep(time) {
  await new Promise((next) => {
    setTimeout(() => {
      next();
    }, time);
  });
}

function Sorting() {
  const [showAction, setShowAction] = useState(false);
  const [picked, setPicked] = useState([]);
  const [initialArr, setInitialArr] = useState([5, 1, 4, 2, 8]);

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
    let arr = [...initialArr];
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
    <div>
      {showAction ? <Action text='Swap' close={() => setShowAction(false)} /> : null}
      {initialArr.map((val, ind) => (
        <div className={picked.includes(ind) ? css.picked : null}>{val}</div>
      ))}
    </div>
  );
}

export default Sorting;
