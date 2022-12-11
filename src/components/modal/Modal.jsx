import React, { useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { postEvent, getEvents } from "../../gateway/gateway";

import "./modal.scss";

const Modal = ({ closeModalHandler, setEventsList }) => {
  const [eventInput, setEventInput] = useState({
    title: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    description: "",
    startTime: moment().format("HH:mm"),
    endTime: moment().add(15, "minutes").format("HH:mm"),
  });

  const showDefaultEvent = () => {
    setEventInput({
      title: "",
      date: moment(new Date()).format("YYYY-MM-DD"),
      description: "",
      startTime: moment().format("HH:mm"),
      endTime: moment().add(15, "minutes").format("HH:mm"),
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setEventInput({ ...eventInput, [name]: value });
  };

  const formatNewEvent = (eventInput) => {
    const { title, date, startTime, endTime, description } = eventInput;
    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };
    return newEvent;
  };

  const createEvent = (eventInput) => {
    const newEvent = formatNewEvent(eventInput);
    postEvent(newEvent).then(() => getEvents(setEventsList));
    showDefaultEvent(eventInput);
    closeModalHandler();
  };

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
          <form
            className="event-form"
            onSubmit={(e) => {
              e.preventDefault();
              createEvent(eventInput);
            }}
          >
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
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
  setEventsList: PropTypes.func.isRequired,
};

export default Modal;
