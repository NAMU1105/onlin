import React from 'react';
// import styled from "@emotion/styled";

const baseUrl = 'https://www.youtube.com/embed/';

const Video = ({ content }) => {
  console.log(content);

  return (
    <section className='video '>
      <h1 className='section-title--theme1'>Video</h1>
      <iframe
        className='video__player'
        title='tsdniktHmOU'
        id='player'
        // type="text/html"
        width='320'
        height='180'
        src={`${baseUrl}tsdniktHmOU?enablejsapi=1&origin=http://example.com`}
        // src={`${baseUrl}00qJumrq6j9ioiNg&origin=http://example.com`}
        // src={`${content.src}`}
        frameBorder='0'
      ></iframe>
    </section>
  );
};
export default Video;
