import React from 'react';

const Timeslot = ({ hour }) => (
  <div className="time-slot">
    <span className="time-slot__time">{`${hour}:00`}</span>
  </div>
);

export default Timeslot;
