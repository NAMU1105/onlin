import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
// import "react-calendar/dist/Calendar.css";

type KorDate = {
  year: string;
  month: string;
};

const CalendarComp = ({ content, themeId }) => {
  const [value, onChange] = useState<Date>(new Date(content.date));
  const [korDate, setkorDate] = useState<KorDate>({ year: '', month: '' });

  useEffect(() => {
    console.log({ value });
    console.log(value.toLocaleDateString().split('. '));
    setkorDate({
      year: value.toLocaleDateString().split('. ')[0],
      month: value.toLocaleDateString().split('. ')[1],
    });
  }, [value]);

  return (
    <section className={`intro-y w-full theme-${themeId}`}>
      <h1
        className={`custom-date w-full absolute flex  justify-center items-baseline text-primary--${themeId}`}
      >
        <span>{korDate.year}</span>
        <span className={`mr-2 subtext`}>년</span>
        <span className={``}>{korDate.month}</span>
        <span className={`subtext`}>월</span>
      </h1>
      <Calendar onChange={() => onChange} value={value} locale='en' />
    </section>
  );
};

export default CalendarComp;
