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
    <div className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border-2 border-festival-yellow/30 p-4 max-w-xs">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-festival-pink" />
        <h3 className="text-sm font-bold text-foreground">Event Countdown</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-festival-pink/10 rounded-lg p-2">
          <div className="text-lg font-bold text-festival-pink">
            {formatTime(timeLeft.days)}
          </div>
          <div className="text-xs text-muted-foreground font-medium">DAYS</div>
        </div>
        
        <div className="bg-festival-purple/10 rounded-lg p-2">
          <div className="text-lg font-bold text-festival-purple">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-xs text-muted-foreground font-medium">HOURS</div>
        </div>
        
        <div className="bg-festival-cyan/10 rounded-lg p-2">
          <div className="text-lg font-bold text-festival-cyan">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-xs text-muted-foreground font-medium">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;