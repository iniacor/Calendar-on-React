import React, { useState } from 'react';
import moment from 'moment';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';
import Modal from '../modal/Modal';

import './calendar.scss';

const Calendar = ({ weekDates, modalStatus, closeModalHandler }) => {
  const [eventsList, setEventsList] = useState(events);

  const [eventInput, setEventInput] = useState({
    title: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    description: '',
    startTime: moment().format('HH:mm'),
    endTime: moment().add(15, 'minutes').format('HH:mm'),
  });

  const showDefaultEvent = () => {
    setEventInput({
      title: '',
      date: moment(new Date()).format('YYYY-MM-DD'),
      description: '',
      startTime: moment().format('HH:mm'),
      endTime: moment().add(15, 'minutes').format('HH:mm'),
    });
  };

  const formatNewEvent = (eventInput) => {
    const { title, date, startTime, endTime, description } = eventInput;
    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
      id: Math.random().toString(16).substr(2, 9),
    };
    return newEvent;
  };
  console.log();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setEventInput({ ...eventInput, [name]: value });
  };

  const createEventHandler = (eventInput) => {
    const newEvent = formatNewEvent(eventInput);
    const updatesEvents = eventsList.concat(newEvent);
    setEventsList(updatesEvents);
    showDefaultEvent(eventInput);
    closeModalHandler();
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      {modalStatus && (
        <Modal
          closeModalHandler={closeModalHandler}
          inputChangeHandler={inputChangeHandler}
          eventInput={eventInput}
          createEventHandler={createEventHandler}
        />
      )}
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} eventsList={eventsList} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
