import React from 'react';
import CalendarDayLable from './CalendarDayLable';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  const currentDate = new Date().getDate();
  const currentDay = days[new Date().getDay()];

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <CalendarDayLable
          key={Math.random().toString(16)}
          days={days}
          currentDate={currentDate}
          currentDay={currentDay}
          dayDate={dayDate}
        />
      ))}
    </header>
  );
};

export default Navigation;
