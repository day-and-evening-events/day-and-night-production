
import React, { useEffect } from 'react';
import './FireworksAnimation.css';

const FireworksAnimation = () => {
  useEffect(() => {
    const createFirework = () => {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.left = Math.random() * window.innerWidth + 'px';
      document.getElementById('fireworks-container')?.appendChild(firework);
      
      setTimeout(() => {
        firework.remove();
      }, 1000);
    };

    const interval = setInterval(() => {
      createFirework();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div id="fireworks-container" className="fixed inset-0 pointer-events-none z-50" />;
};

export default FireworksAnimation;
