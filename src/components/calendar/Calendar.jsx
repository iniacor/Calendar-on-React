import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import { fetchDelete, getEvents } from "../../gateway/gateway";
import Modal from "../modal/Modal";

import "./calendar.scss";

const Calendar = ({ weekDates, isModalShown, closeModalHandler }) => {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    getEvents(setEventsList);
  }, []);

  const deleteEvent = (id) => {
    fetchDelete(id)
      .then(() => getEvents(setEventsList))
      .then((eventData) => {
        const updEventsList = eventData.map((event) => ({
          ...event,
          dateFrom: new Date(event.dateFrom),
          dateTo: new Date(event.dateTo),
        }));
        setEventsList(updEventsList);
      });
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      {isModalShown && (
        <Modal
          closeModalHandler={closeModalHandler}
          setEventsList={setEventsList}
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

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  isModalShown: PropTypes.bool.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
};

export default Calendar;
