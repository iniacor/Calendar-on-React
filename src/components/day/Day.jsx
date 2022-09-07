import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, deleteEventHandler, children }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {children}
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            deleteEventHandler={deleteEventHandler}
          />
        );
      })}
    </div>
  );
};
Day.propTypes = {
  dataDay: PropTypes.string.isRequired,
  dayEvents: PropTypes.array.isRequired,
  deleteEventHandler: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};

export default Day;
