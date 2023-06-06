import React from 'react';

export const Page: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Storybook play test</h1>
      <div>This stories counter starts at "0"</div>
      <div>Count : {count}</div>
      <button onClick={()=>setCount((prev)=>prev + 1)}>Increment</button>
    </div>
  );
};
