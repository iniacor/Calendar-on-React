import React, { useState } from 'react';

import './modal.scss';

const Modal = ({
  closeModalHandler,
  inputChangeHandler,
  eventInput,
  submitEventHandler,
}) => {
  const { title, description, date, startTime, endTime } = eventInput;
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={closeModalHandler}
          >
            +
          </button>
          <form className="event-form">
            <input
              className="event-form__field"
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              onChange={inputChangeHandler}
            />
            <div className="event-form__time">
              <input
                className="event-form__field"
                type="date"
                name="date"
                value={date}
                onChange={inputChangeHandler}
              />
              <input
                className="event-form__field"
                type="time"
                name="startTime"
                value={startTime}
                onChange={inputChangeHandler}
              />
              <span>-</span>
              <input
                className="event-form__field"
                type="time"
                name="endTime"
                value={endTime}
                onChange={inputChangeHandler}
              />
            </div>
            <textarea
              className="event-form__field"
              name="description"
              value={description}
              placeholder="Description"
              onChange={inputChangeHandler}
            ></textarea>
            <button
              type="submit"
              className="event-form__submit-btn"
              onSubmit={submitEventHandler}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
