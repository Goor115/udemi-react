import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';

function RandomMunber({ maxNum }) {
  const [randomNum, setRanomNum] = useState(generateRandomNum(maxNum));
  const changeRendomNum = () => {
    setRanomNum(generateRandomNum(maxNum));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRendomNum}>Generate new random number</button>
    </div>
  );
}

export default RandomMunber;
