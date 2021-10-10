import React, { useEffect, useState } from 'react';
// import styled from "@emotion/styled";

const baseUrl = 'https://www.youtube.com/embed/';

const Video = ({ content, themeId }) => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    const url = content.src.split('watch?v=')[1];
    setUrl(url);
  }, []);

  return (
    <section className='video'>
      <h1 className={`section-title--${themeId}`}>Video</h1>
      <iframe
        className='video__player'
        title='tsdniktHmOU'
        id='player'
        // type="text/html"
        width='320'
        height='180'
        // src={`${baseUrl}tsdniktHmOU?enablejsapi=1&origin=http://example.com`}
        src={`${baseUrl}${url}?enablejsapi=1&origin=http://example.com`}
        // src={`${baseUrl}00qJumrq6j9ioiNg&origin=http://example.com`}
        // src={`${content.src}`}
        frameBorder='0'
      ></iframe>
    </section>
  );
};
export default Video;
