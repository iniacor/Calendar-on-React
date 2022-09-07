import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeleteEventBtn from './DeleteEventBtn';

import './event.scss';

const Event = ({
  height,
  marginTop,
  title,
  description,
  time,
  id,
  deleteEventHandler,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const [deleteBtn, setDeleteBtn] = useState(false);
  const deleteBtnHandler = () => {
    setDeleteBtn(!deleteBtn);
  };

  return (
    <div style={eventStyle} className="event" onClick={deleteBtnHandler}>
      {deleteBtn ? (
        <DeleteEventBtn id={id} deleteEventHandler={deleteEventHandler} />
      ) : null}
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <div className="event__description">{description}</div>
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteEventHandler: PropTypes.func.isRequired,
};

export default Event;
