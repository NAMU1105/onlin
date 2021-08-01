import React from 'react';

const Greeting = ({ content, themeId }) => {
  console.log({ themeId });

  return (
    <section id='greeting' className='greeting section-padding-big'>
      <h1 className={`section-title--${themeId} `}>greeting</h1>
      <h3 className={`sub-title text-content--${themeId}`}>{content.title}</h3>
      <p className={`greeting__content text-content--${themeId}`}>
        {content.content}
      </p>
    </section>
  );
};

export default Greeting;
