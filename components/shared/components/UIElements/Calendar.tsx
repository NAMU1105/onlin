import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
// import "react-calendar/dist/Calendar.css";

type KorDate = {
  year: string;
  month: string;
};

const CalendarComp = ({ content, themeId }) => {
  const [value, setDateValue] = useState<Date>();
  // const [value, onChange] = useState<Date>(new Date(content.date));
  const [korDate, setkorDate] = useState<KorDate>({ year: '', month: '' });

  useEffect(() => {
    if (isNaN(content.date) == false) {
      const date = new Date(content.date);
      setDateValue(date);

      // invalid 할 경우
    } else {
      const date = new Date(content.date.split('T')[0]);
      setDateValue(date);
    }

    setkorDate({
      year: content.date.split('-')[0],
      month:
        content.date.split('-')[1].split('0')[0] === '0'
          ? content.date.split('-')[1].split('0')[1]
          : content.date.split('-')[1],
    });
  }, [value]);

  return (
    <section className={`intro-y w-full theme-${themeId}`}>
      <h1
        className={`custom-date w-full absolute flex  justify-center items-baseline text-primary--${themeId}`}
      >
        <span>{korDate.year}</span>
        <span className={`mr-2 subtext`}>년</span>
        <span>{korDate.month}</span>
        <span className={`subtext`}>월</span>
      </h1>
      <Calendar onChange={() => setDateValue} value={value} locale='en' />
    </section>
  );
};

export default CalendarComp;
