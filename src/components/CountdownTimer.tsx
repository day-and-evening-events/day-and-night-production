import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-10-11T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 p-2 max-w-xs">
      <div className="text-xs text-yellow-400 mb-1 text-center font-medium">Countdown</div>
      <div className="grid grid-cols-3 gap-1 text-center">
        <div className="bg-white/10 rounded p-1">
          <div className="text-sm font-bold text-yellow-400">
            {formatTime(timeLeft.days)}
          </div>
          <div className="text-xs text-yellow-300">D</div>
        </div>
        
        <div className="bg-white/10 rounded p-1">
          <div className="text-sm font-bold text-yellow-400">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-xs text-yellow-300">H</div>
        </div>
        
        <div className="bg-white/10 rounded p-1">
          <div className="text-sm font-bold text-yellow-400">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-xs text-yellow-300">S</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;