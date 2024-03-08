// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function Countdown() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const countDownDate = new Date("April 5, 2024 00:00:00").getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      if (distance < 0) {
        clearInterval(x);
        setCountdown("EXPIRED");
      }
    }, 1000);
    return () => clearInterval(x);
  }, []);

  return <div id="countdown">{countdown}</div>;
}

export default Countdown;
