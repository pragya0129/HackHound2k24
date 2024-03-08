import { useState, useEffect } from "react";

function PrizeCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     
      setCount((prevCount) => (prevCount >= 350000 ? 0 : prevCount + 500));
    }, 5); 

    
    if (count >= 350000) {
      clearInterval(interval);
      
      setTimeout(() => {
        setCount(0);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="registration-counter">
      <span className="count">{count}</span>
      <span> Prize Pool</span>
    </div>
  );
}

export default PrizeCounter;
