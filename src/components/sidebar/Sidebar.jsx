import React from 'react';
import Timeslot from './Timeslot';

import './sidebar.scss';

const Sidebar = (props) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__time-scale">
      {hours.map((hour) => (
        <Timeslot key={hour + 1} hour={hour} />
      ))}
    </div>
  );
};

export default Sidebar;
