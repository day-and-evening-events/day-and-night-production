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
    <div className="festival-card p-6 bg-gradient-to-br from-festival-pink/10 to-festival-purple/10 border-2 border-festival-yellow/20">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-festival-pink" />
        <h3 className="text-xl font-bold text-foreground">Event Countdown</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white/50 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-festival-pink">
            {formatTime(timeLeft.days)}
          </div>
          <div className="text-sm text-muted-foreground font-medium">DAYS</div>
        </div>
        
        <div className="bg-white/50 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-festival-purple">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-sm text-muted-foreground font-medium">HOURS</div>
        </div>
        
        <div className="bg-white/50 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-festival-cyan">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-sm text-muted-foreground font-medium">SECONDS</div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">Until Lucknow ki Bollywood Dandiya Night begins!</p>
      </div>
    </div>
  );
};

export default CountdownTimer;