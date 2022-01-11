import { useEffect, useState } from 'react';
import './App.css';

async function sleep(time) {
  await new Promise((next) => {
    setTimeout(() => {
      next();
    }, time);
  });
}

function App() {
  const [arr, setArr] = useState([5, 2, 4, 8, 1, 7, 9]);
  useEffect(() => {
    (async function foo() {
      // for (let i = 0; i < arr.length; i++) {
      //   console.log(i);
      //   setTimeout(() => {
      //     console.log('bhidu', i);
      //   }, i * 1000);
      // }
      for (var i = 0; i < arr.length; i++) {
        console.log('outer');
        await sleep(2000);
      }
    })();
  }, []);
  return (
    <div>
      {arr.map((val) => (
        <div>{val}</div>
      ))}
    </div>
  );
}

export default App;
