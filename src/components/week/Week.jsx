import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Day from '../day/Day';
import RedLine from '../redLine/RedLine';

import './week.scss';

const Week = ({ weekDates, eventsList, deleteEventHandler }) => (
  <div className="calendar__week">
    {weekDates.map((dayStart) => {
      const dayEnd = new Date(dayStart.getTime()).setHours(
        dayStart.getHours() + 24
      );
      //getting all events from the day we will render
      const dayEvents = eventsList.filter(
        (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
      );

      return (
        <Day
          key={dayStart.getDate()}
          dataDay={dayStart.toString()}
          dayEvents={dayEvents}
          deleteEventHandler={deleteEventHandler}
        >
          {moment(dayStart).format('LL') ===
            moment(new Date()).format('LL') && <RedLine />}
        </Day>
      );
    })}
  </div>
);
Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  eventsList: PropTypes.array.isRequired,
  deleteEventHandler: PropTypes.func.isRequired,
};

export default Week;
