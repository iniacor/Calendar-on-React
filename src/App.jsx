import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const DAYS_IN_WEEK = 7;

  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const [isModalShown, setIsModalShown] = useState(false);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const currentDate = new Date(weekStartDate).getDate();

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  const prevWeekHandler = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(currentDate - DAYS_IN_WEEK))
    );
  };

  const nextWeekHandler = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(currentDate + DAYS_IN_WEEK))
    );
  };

  const toCurrentWeekHandler = () => {
    setWeekStartDate(new Date());
  };
  return (
    <>
      <Header
        prevWeekHandler={prevWeekHandler}
        nextWeekHandler={nextWeekHandler}
        toCurrentWeekHandler={toCurrentWeekHandler}
        weekStartDate={weekStartDate}
        openModalHandler={openModalHandler}
      />
      <Calendar
        weekDates={weekDates}
        isModalShown={isModalShown}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
};

export default App;
