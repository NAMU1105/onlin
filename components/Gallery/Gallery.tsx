import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/react";

import Video from "../shared/components/UIElements/Video";
import Image from "../shared/components/UIElements/Image";
import CalendarComp from "../shared/components/UIElements/Calendar";

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
  const [value, onChange] = useState(new Date());

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
      <section>
        <h1>영상보기</h1>
        <Video />
      </section>
      <section>
        <h1>캘린더</h1>
        <CalendarComp />
      </section>
    </>
  );
};

export default Gallery;
