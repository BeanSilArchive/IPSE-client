import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";

function reducer(state, action) {
  return {
    ...state,
    ...action
  };
}

const calculateCountdown = endDate => {
  let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

  if (diff <= 0) return false;

  const timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0
  };

  if (diff >= 365.25 * 86400) {
    // 365.25 * 24 * 60 * 60
    timeLeft.years = Math.floor(diff / (365.25 * 86400));
    diff -= timeLeft.years * 365.25 * 86400;
  }
  if (diff >= 86400) {
    // 24 * 60 * 60
    timeLeft.days = Math.floor(diff / 86400);
    diff -= timeLeft.days * 86400;
  }
  if (diff >= 3600) {
    // 60 * 60
    timeLeft.hours = Math.floor(diff / 3600);
    diff -= timeLeft.hours * 3600;
  }
  if (diff >= 60) {
    timeLeft.min = Math.floor(diff / 60);
    diff -= timeLeft.min * 60;
  }
  timeLeft.sec = diff;

  return timeLeft;
};

const Wrapper = styled.div`
  display: flex;

  span {
    font-size: 4rem;
  }
`;

const DateCounter = ({ endDate }) => {
  const [intervalID, setIntervalID] = useState(null);

  const [state, dispatch] = useReducer(reducer, {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0
  });

  const { days, hours, min, sec } = state;

  useEffect(() => {
    const id = setInterval(() => {
      const date = calculateCountdown(endDate);
      date ? dispatch(date) : clearInterval(intervalID);
    }, 1000);

    setIntervalID(id);
    return () => clearInterval(id);
  }, []);

  const formatedHours = hours.toString().padStart(2, "0");
  const formatedMin = min.toString().padStart(2, "0");
  const formatedSec = sec.toString().padStart(2, "0");

  return (
    <Wrapper>
      <span>{days}</span>
      <span style={{ marginRight: `10px` }}>일</span>
      <span>
        {formatedHours}:{formatedMin}:{formatedSec}
      </span>
    </Wrapper>
  );
};

export default DateCounter;
