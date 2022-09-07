import React from 'react';
import PropTypes from 'prop-types';

const Timeslot = ({ hour }) => (
  <div className="time-slot">
    <span className="time-slot__time">{`${hour}:00`}</span>
  </div>
);

Timeslot.propTypes = {
  hour: PropTypes.number.isRequired,
};

export default Timeslot;
