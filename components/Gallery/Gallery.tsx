import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Video from "../shared/components/UIElements/Video";
import SliderImage from "../shared/components/UIElements/Slider";
import Image from "../shared/components/UIElements/Image";

const DUMMY_IMAGES = [
  {
    id: 0,
    src: "/couple.jpg",
    alt: "couple",
  },
  {
    id: 1,
    src: "/couple.jpg",
    alt: "couple",
  },
  {
    id: 2,
    src: "/couple.jpg",
    alt: "couple",
  },
  {
    id: 3,
    src: "/couple.jpg",
    alt: "couple",
  },
  {
    id: 4,
    src: "/couple.jpg",
    alt: "couple",
  },
  {
    id: 5,
    src: "/couple.jpg",
    alt: "couple",
  },
  {
    id: 6,
    src: "/couple.jpg",
    alt: "couple",
  },
  {
    id: 7,
    src: "/couple.jpg",
    alt: "couple",
  },
  {
    id: 8,
    src: "/couple.jpg",
    alt: "couple",
  },
];

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

const Gallery = (props) => {
  return (
    <>
      {/* <SliderImage /> */}
      <Container>
        {DUMMY_IMAGES.map((image) => {
          return (
            <Image
              key={image.id}
              id={image.id}
              src={image.src}
              alt="couple"
              totalCount={9}
            />
          );
        })}
      </Container>
      <h1>영상보기</h1>
      <Video />
    </>
  );
};

export default Gallery;