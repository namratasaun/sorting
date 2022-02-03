import { useState } from 'react';

const KeyIndex = () => {
  const [demo, setDemo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const clickHandler = (ind) => {
    let temp = [...demo];
    temp.splice(ind, 1);
    setDemo(temp);
  };

  const addHandler = () => {
    setDemo((prevValue) => [11, ...prevValue]);
  };

  return (
    <div>
      {demo.map((val, ind) => (
        <div key={ind}>
          <div onClick={() => clickHandler(ind)}>{val}</div>
          <input />
        </div>
      ))}
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default KeyIndex;
