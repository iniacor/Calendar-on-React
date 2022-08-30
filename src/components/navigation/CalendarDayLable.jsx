import React from 'react';

const CalendarDayLable = ({ days, currentDate, currentDay, dayDate }) => {
  return (
    <div className="calendar__day-label day-label">
      <span
        className={
          days[dayDate.getDay()] === currentDay
            ? 'day-label__day-name day-label__day-name_current'
            : 'day-label__day-name'
        }
      >
        {days[dayDate.getDay()]}
      </span>
      <span
        className={
          dayDate.getDate() === currentDate
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
