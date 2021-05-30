import React from "react";
// import { css, jsx } from '@emotion/core'
import styled from "@emotion/styled";
import Image from "next/image";

const Container = styled.section`
  margin: 3rem 0;
  font-family: "KoPub Batang", serif;
  font-size: 1.7rem;
  font-weight: 500;
  color: #4e4e4e;
  line-height: 2;
  position: absolute !important;

  & h3 {
    color: #9d858b;
    font-size: 2.5rem;
  }
`;

const Main = ({ content }) => {
  // console.log("main: ", content);

  const date = new Date(content.date).toLocaleTimeString("en", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="relative">
        <img
          src="/mainImage.png"
          // src={content.image}
          alt="Main wedding image"
          className=""
        />
        <Container className="invitation w-full intro-y bottom-0 left-0 flex flex-col items-center justify-center">
          <h3>{content.title}</h3>
          <div>
            <span className="mr-2">신랑: {content.groom}</span>
            <span>신부: {content.bride}</span>
          </div>
          <span className="mr-4">{date}</span>
        </Container>
      </div>
    </>
  );
};

export default Main;
