import React from 'react';
import Timeslot from './Timeslot';

import './sidebar.scss';

const Sidebar = () => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__time-scale">
      {hours.map((hour) => (
        <Timeslot key={hour} hour={hour} />
      ))}
    </div>
  );
};

export default Sidebar;
