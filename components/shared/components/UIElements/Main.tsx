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
  // console.log(content);

  return (
    <>
      <div className="relative">
        <img
          src="/mainImage.png"
          alt="Main wedding image"
          className=""
          // layout="fill"
          // width={500}
          // height={500}
        />
        <Container className="invitation intro-y bottom-0 left-0">
          <h3>{content.title}</h3>
          <span>{content.date}</span>
          <span>신랑: {content.groom}</span>
          <span>신부: {content.bride}</span>
        </Container>
      </div>
    </>
  );
};

export default Main;
