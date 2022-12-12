import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./header.scss";

const Header = ({
  prevWeekHandler,
  nextWeekHandler,
  toCurrentWeekHandler,
  weekStartDate,
  openModalHandler,
}) => {
  const currentFullMonth = moment(weekStartDate).format("MMMM");
  const currentMonthEnd = moment(weekStartDate).format("MMM");
  const nextMonthStart = moment(weekStartDate).add(1, "month").format("MMM");
  const betweenMonth = `${currentMonthEnd} - ${nextMonthStart}`;

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={openModalHandler}>
        <i className="create-event-btn__icon">
          <svg
            className="create-event-btn__icon-svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path fill="#34A853" d="M16 16v14h4V20z"></path>
            <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
            <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
            <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
        </i>
        Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={toCurrentWeekHandler}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={prevWeekHandler}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={nextWeekHandler}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {weekStartDate.getDate() > 25 ? betweenMonth : currentFullMonth}
        </span>
      </div>
    </header>
  );
};

Header.propTypes = {
  prevWeekHandler: PropTypes.func.isRequired,
  nextWeekHandler: PropTypes.func.isRequired,
  toCurrentWeekHandler: PropTypes.func.isRequired,
  weekStartDate: PropTypes.object.isRequired,
  openModalHandler: PropTypes.func.isRequired,
};

export default Header;
