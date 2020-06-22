import React from 'react';

const Counter = ({index, score, updateScore}) => {
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => updateScore(index, -1)}> - </button>
          <span className="counter-score">{ score }</span>
          <button className="counter-action increment" onClick={() => updateScore(index, +1)}> + </button>
        </div>
      );
  }


  export default Counter;