import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';

function RandomMunber() {
  const [randomNum, setRanomNum] = useState(generateRandomNum());
  const changeRendomNum = () => {
    setRanomNum(generateRandomNum());
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRendomNum}>Generate new random number</button>
    </div>
  );
}

export default RandomMunber;
