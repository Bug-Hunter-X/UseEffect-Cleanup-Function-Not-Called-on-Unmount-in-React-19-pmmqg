```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cleanup = () => {
      console.log('Cleanup function running');
    };
    // This effect runs after every render, including the initial render
    console.log('Effect running:', count);
    return cleanup;
  }, [count]); // Add count to dependency array

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
export default MyComponent;
```