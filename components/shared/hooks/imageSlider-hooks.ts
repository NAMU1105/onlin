import React from "react";

export const useImageSlider = (props) => {
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

  const totalCaroselLength = DUMMY_IMAGES.length - 1;

  return { DUMMY_IMAGES, totalCaroselLength };
};

export default useImageSlider;
