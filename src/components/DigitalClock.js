import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const hours = time.getHours();
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = formatTime(hours % 12 || 12);
  
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const currentDay = time.getDay();
  const currentDate = time.getDate();
  const currentMonth = time.getMonth();
  const currentYear = time.getFullYear();

  useEffect(() => {
    document.title = `${displayHours}:${minutes}:${seconds} ${ampm}`;
  }, [displayHours, minutes, seconds, ampm]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222222] text-[#afeeee] font-orbitron">
      <div className="flex flex-col items-center p-8">
        <div className="flex items-center">
          <div className="text-6xl sm:text-7xl font-bold">
            {displayHours}:{minutes}:{seconds}
          </div>
          <div className="text-2xl sm:text-3xl ml-4 mt-2">
            {ampm}
          </div>
        </div>

        <div className="flex flex-wrap justify-center my-8 gap-4">
          {days.map((day, index) => (
            <div
              key={day}
              className={`text-xl sm:text-2xl capitalize transition-colors duration-300 ${
                index === currentDay ? 'text-[#afeeee] font-bold' : 'text-gray-500'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="text-2xl sm:text-3xl">
          {months[currentMonth]} {currentDate}, {currentYear}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;