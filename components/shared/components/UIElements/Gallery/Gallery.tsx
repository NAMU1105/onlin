import React from "react";
import styled from "@emotion/styled";

import Video from "../Video";

const Container = styled.article`
  display: grid;
  grid-gap: 5px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);

  & img {
    width: 100%;
  }
`;

const Gallery = (props) => (
  <section className="gallery">
    <h1>사진보기</h1>
    <Container>
      <img src="/couple.jpg" alt="couple" />
      <img src="/couple.jpg" alt="couple" />
      <img src="/couple.jpg" alt="couple" />
      <img src="/couple.jpg" alt="couple" />
      <img src="/couple.jpg" alt="couple" />
      <img src="/couple.jpg" alt="couple" />
    </Container>
    <h1>영상보기</h1>
    <Video />
  </section>
);

export default Gallery;
