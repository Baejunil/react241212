import React, { useState } from 'react';
import '../css/Test07.css';

function Test07() {
  const [count, setCount] = useState(0);

  // 카운트 변경 함수
  const handleCountChange = (value) => {
    setCount(count + value);
  };

  return (
    <div className="container">
      <h1>Simple Counter</h1>
      <div className="counter-box">
        <p>현재 카운트 :</p>
        <h2>{count}</h2>
      </div>
      <div className="button-cont">
        <button onClick={() => handleCountChange(-1)}>-1</button>
        <button onClick={() => handleCountChange(-10)}>-10</button>
        <button onClick={() => handleCountChange(-100)}>-100</button>
        <button onClick={() => handleCountChange(100)}>+100</button>
        <button onClick={() => handleCountChange(10)}>+10</button>
        <button onClick={() => handleCountChange(1)}>+1</button>
      </div>
    </div>
  );
}

export default Test07;
