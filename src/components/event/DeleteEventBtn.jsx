import React from 'react';

const DeleteEventBtn = ({ id, deleteEventHandler }) => {
  return (
    <button className="delete-event-btn" onClick={() => deleteEventHandler(id)}>
      +
    </button>
  );
};
export default DeleteEventBtn;
