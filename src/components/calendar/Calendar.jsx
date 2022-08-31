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
    dateFrom: new Date(2022, 8, 3, 10, 15),
    dateTo: new Date(2022, 8, 3, 11, 0),
    date: moment(new Date()).format('YYYY-MM-DD'),
    description: '',
    startTime: moment().format('HH:mm'),
    endTime: moment().format('HH:mm'),
  });

  const submitEventHandler = (e) => {
    console.log(e);
    debugger;
    const { title } = eventInput;
    const newEvent = {
      title,
    };
    console.log(newEvent);
    const updatedEvents = events.concat(newEvent);
    console.log(updatedEvents);
    setEventsList({ eventsList: updatedEvents });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setEventInput({ ...eventInput, [name]: value });
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      {modalStatus && (
        <Modal
          closeModalHandler={closeModalHandler}
          inputChangeHandler={inputChangeHandler}
          eventInput={eventInput}
          submitEventHandler={submitEventHandler}
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
