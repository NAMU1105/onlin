import React from "react";
import styled from "@emotion/styled";
import Image from "../../components/UIElements/Image";

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

const Gallery = (props) => (
  <section className="flex flex-col w-full intro-y mt-12">
    <h1 className="text-center mb-4 sub-title">갤러리</h1>
    <div className="grid gap-2 grid-rows-2 grid-cols-3">
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
    </div>
  </section>
);
export default Gallery;
