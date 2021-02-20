import React from "react";
import styled from "@emotion/styled";

const Container = styled.iframe`
  width: 100%;
`;

const Video = (props) => {
  const baseUrl = "https://www.youtube.com/embed/";
  return (
    <Container
      title="tsdniktHmOU"
      id="player"
      type="text/html"
      width="640"
      height="390"
      src={`${baseUrl}tsdniktHmOU?enablejsapi=1&origin=http://example.com`}
      frameBorder="0"
    ></Container>
  );
};
export default Video;
