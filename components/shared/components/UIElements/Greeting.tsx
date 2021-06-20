import React from 'react';

const Greeting = ({ content }) => {
  // console.log(content);

  return (
    <section id='greeting' className='greeting section-padding-big'>
      <h1 className='section-title--theme1'>greeting</h1>
      <h3 className='sub-title text-content-theme1'>{content.title}</h3>
      <p className='greeting__content text-content-theme1'>{content.content}</p>
    </section>
  );
};

export default Greeting;
