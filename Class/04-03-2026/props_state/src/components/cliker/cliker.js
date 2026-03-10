import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div >
      
      <button onClick={() => setCount(count + 1)}>
        Клик +
      </button>

      <button onClick={() => setCount(count - 1)}>
        Клик -
      </button>

      <div style={{ 
        padding: '10px 20px', 
        fontSize: '24px' 
      }}>
        {count}
      </div>

    </div>
  );
};

export default ClickCounter;