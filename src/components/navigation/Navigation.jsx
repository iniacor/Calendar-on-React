import React from 'react';
import PropTypes from 'prop-types';
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

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
