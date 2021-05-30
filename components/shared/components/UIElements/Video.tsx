import React from "react";
// import styled from "@emotion/styled";

const baseUrl = "https://www.youtube.com/embed/";

const Video = ({ content }) => {
  console.log(content);

  return (
    <iframe
      className="w-full intro-y"
      title="tsdniktHmOU"
      id="player"
      // type="text/html"
      width="640"
      height="390"
      src={`${baseUrl}tsdniktHmOU?enablejsapi=1&origin=http://example.com`}
      // src={`${baseUrl}00qJumrq6j9ioiNg&origin=http://example.com`}
      // src={`${content.src}`}
      frameBorder="0"
    ></iframe>
  );
};
export default Video;
