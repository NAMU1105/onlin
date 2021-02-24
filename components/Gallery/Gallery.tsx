import React, { useRef, useState } from "react";
import styled from "@emotion/styled";

import Image from "../shared/components/UIElements/Image";
import Video from "../shared/components/UIElements/Video";
import Backdrop from "../shared/components/UIElements/Backdrop";

const Container = styled.article`
  display: grid;
  grid-gap: 5px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);

  & img {
    width: 100%;
  }
`;

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

const Gallery = (props) => {
  //  const ImageRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <section className="gallery">
        <h1 className="capitalize">gallery</h1>
        <Container>
          {DUMMY_IMAGES.map((image) => {
            return (
              <Image
                // ref={ImageRef}
                key={image.id}
                id={image.id}
                src={image.src}
                alt="couple"
                // onClick={clickTest}
              />
            );
          })}

          {/* <Image src="/couple.jpg" alt="couple" />
      <Image src="/couple.jpg" alt="couple" />
      <Image src="/couple.jpg" alt="couple" />
      <Image src="/couple.jpg" alt="couple" />
      <Image src="/couple.jpg" alt="couple" />
      <Image src="/couple.jpg" alt="couple" />
      <Image src="/couple.jpg" alt="couple" />
      <Image src="/couple.jpg" alt="couple" /> */}
        </Container>
        <h1>영상보기</h1>
        <Video />
      </section>
    </>
  );
};

export default Gallery;
