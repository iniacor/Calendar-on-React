import React from 'react';
import { days } from '../../utils/dateUtils.js';

const CalendarDayLable = ({ dayDate }) => {
  const currentDate = new Date().getDate();
  const currentDay = new Date().getDay();
  const currentMonth = new Date().getMonth();

  return (
    <div className="calendar__day-label day-label">
      <span
        className={
          dayDate.getDate() === currentDate &&
          days[dayDate.getDay()] === days[currentDay] &&
          dayDate.getMonth() === currentMonth
            ? 'day-label__day-name day-label__day-name_current'
            : 'day-label__day-name'
        }
      >
        {days[dayDate.getDay()]}
      </span>
      <span
        className={
          dayDate.getDate() === currentDate &&
          days[dayDate.getDay()] === days[currentDay] &&
          dayDate.getMonth() === currentMonth
            ? 'day-label__day-number day-label__day-number_current'
            : 'day-label__day-number '
        }
      >
        {dayDate.getDate()}
      </span>
    </div>
  );
};

export default CalendarDayLable;
