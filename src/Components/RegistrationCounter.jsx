import { useState, useEffect } from "react";

function RegistrationCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = 2000000; 
    const duration = 0; 
    const steps = Math.ceil(duration / increment); 

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + 5;
        return nextCount > 1300 ? 0 : nextCount;
      });
    }, duration / steps);

    const resetInterval = () => {
      clearInterval(interval);
      
      setTimeout(() => {
        setCount(0);
      }, 5000);
    };

    if (count >= 1300) {
      resetInterval();
    }

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="registration-counter">
      <span className="count">{count}</span>
      
      <span><span>+</span>Registrations</span>
    </div>
  );
}

export default RegistrationCounter;
