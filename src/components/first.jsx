import React, { useState, useEffect } from 'react';
import "./first.css";
import { useNavigate } from 'react-router-dom';
import '@fontsource/inter'; // Defaults to 400 weight
import '@fontsource/inter/700.css';
export default function First() {
  const navigate = useNavigate();
  const text = "Welcome to Trading Studio...";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      let speed = 1000000;

      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      }

      if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000); 
        speed = 100;
      } else if (isDeleting && index === 0) {
        setTimeout(() => setIsDeleting(false), 500); 
        speed = 100;
      }

      setTimeout(typeEffect, speed);
    };

    const timeout = setTimeout(typeEffect, 100);
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div>
      <h1>{displayText}</h1>
      <div className='container'>
        <div className='carding'>
          <h2 className='title'>Create a Strategy</h2>
          <p className='subtitle'>to Simulate Returns</p>

          <button className='button' onClick={() => navigate("/second")}>
            BEGIN
          </button>

          <hr className='divider' />

          <p className='footerText' onClick={() => navigate("/builtInStrategies")}>
            Or test with built-in strategies...
          </p>
        </div>
      </div>
    </div>
  );
}

