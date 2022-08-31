import React from 'react';
import CalendarDayLable from './CalendarDayLable';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <CalendarDayLable key={Math.random().toString(16)} dayDate={dayDate} />
      ))}
    </header>
  );
};

export default Navigation;
