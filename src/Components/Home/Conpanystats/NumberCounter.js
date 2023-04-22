import React, { useState, useEffect } from 'react';

function NumberCounter({ startValue, endValue }) {
  const [count, setCount] = useState(startValue);
  const difference = endValue - startValue;
  const totalDuration = 3000; // total time in milliseconds
  const increment = difference / (totalDuration / 10); // increment by a fraction of the difference every 10ms

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endValue) {
        setCount((prevCount) => prevCount + increment);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count, endValue, increment]);

  return (
    <div>
      <h2 className='text-3xl font-bold p-2'>{Math.round(count)}</h2>
    </div>
  );
}

export default NumberCounter;
