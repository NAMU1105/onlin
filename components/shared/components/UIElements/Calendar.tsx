import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

const CalendarComp = ({ content }) => {
  // console.log("map: ", content);
  const [value, onChange] = useState<Date>(new Date(content.date));

  return (
    <div className="intro-y">
      <Calendar onChange={() => onChange} value={value} locale="ko" />
    </div>
  );
};

export default CalendarComp;
