'use client';
import { useCallback, useState } from 'react';

const Chapter3Page = () => {
  const [count, setCount] = useState<number>(0);

  const onClick = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log('now count', count);
  }, [count]);


  return (
    <div className='flex justify-center'>
      <div>
        <h5>now count: {count}</h5>
        <button className='border-2 border-white active:bg-violet-700' onClick={onClick}>Click Me!</button>
      </div>
    </div>
  )
}

export default Chapter3Page;