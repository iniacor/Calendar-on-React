import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import {
  formatNewEvent,
  postEvent,
  getEvent,
  fetchDelete,
} from '../../gateway/gateway';
import Modal from '../modal/Modal';

import './calendar.scss';

const Calendar = ({ weekDates, modalStatus, closeModalHandler }) => {
  const [eventsList, setEventsList] = useState([]);

  const [eventInput, setEventInput] = useState({
    title: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    description: '',
    startTime: moment().format('HH:mm'),
    endTime: moment().add(15, 'minutes').format('HH:mm'),
  });

  useEffect(() => {
    getEvent(setEventsList);
  }, []);

  const showDefaultEvent = () => {
    setEventInput({
      title: '',
      date: moment(new Date()).format('YYYY-MM-DD'),
      description: '',
      startTime: moment().format('HH:mm'),
      endTime: moment().add(15, 'minutes').format('HH:mm'),
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setEventInput({ ...eventInput, [name]: value });
  };

  const createEvent = (eventInput) => {
    const newEvent = formatNewEvent(eventInput);
    postEvent(newEvent).then(() => getEvent(setEventsList));
    showDefaultEvent(eventInput);
    closeModalHandler();
  };

  const deleteEvent = (id) => {
    fetchDelete(id).then(() => getEvent(setEventsList));
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      {modalStatus && (
        <Modal
          closeModalHandler={closeModalHandler}
          inputChangeHandler={inputChangeHandler}
          eventInput={eventInput}
          createEventHandler={createEvent}
        />
      )}
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            eventsList={eventsList}
            deleteEventHandler={deleteEvent}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
