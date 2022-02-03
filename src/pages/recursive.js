import { useEffect, useState } from 'react';

const RecursiveMenu = ({ data }) => {
  const [expand, setExpand] = useState({});

  const expandHandler = (ind) => {
    console.log('here');
    if (expand.hasOwnProperty(ind)) {
      let temp = { ...expand };
      delete temp[ind];
      return setExpand(temp);
    }
    setExpand((prevValue) => ({ [ind]: 1, ...prevValue }));
  };

  return (
    <div>
      {data.map((val, ind) => (
        <div>
          <p onClick={val.isFolder ? () => expandHandler(ind) : null}>{val.name}</p>
          {expand.hasOwnProperty(ind) && val.isFolder ? (
            <div style={{ paddingLeft: '10px' }}>
              <RecursiveMenu data={val.children} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default RecursiveMenu;
