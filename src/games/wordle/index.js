import { useEffect, useState } from 'react';
import Grid from './grid';
import styles from './index.module.css';
import Keyboard from './keyboard';
import { wordList } from './wordlist';

const MAX_LENGTH = 5;

const Wordle = () => {
  const [guess, setGuess] = useState(0);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('errors', error);
  }, [error]);

  const keyPressed = (key) => {
    let tempData = JSON.parse(JSON.stringify(data));

    if (key === 'Backspace') {
      console.log(tempData);
      tempData[guess]?.splice(-1);
      console.log(tempData);
      return setData([...tempData]);
    }
    if (key === 'Enter') {
      console.log(tempData[guess]);
      if (tempData[guess].length < 5) {
        return setError('Not enough letters');
      }
      if (wordList.indexOf(tempData[guess].join('')) === -1) {
        return setError('Not in word list');
      }
      return setGuess((prevState) => prevState + 1);
    }
    if (tempData[guess]?.length >= 5) {
      console.log('now returning');
      return;
    }
    tempData[guess] = tempData[guess] ? [...tempData[guess], key] : [key];
    console.log('guess', guess);
    console.log(tempData);
    setData(tempData);
  };

  return (
    <div>
      <Grid data={data} />
      <Keyboard keyPressHandler={keyPressed} />
    </div>
  );
};

export default Wordle;
