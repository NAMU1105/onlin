import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Image from "../components/UIElements/Image";

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

const dynamicStyle = (props) =>
  css`
    display: ${props.display};
    grid-gap: 5px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    flex-direction: column;
  `;

const Container = styled.div`
  ${dynamicStyle};
`;

const CaroselContainer = styled.div`
  width: 40rem;
  overflow: hidden;

  & > div {
    display: flex;
    width: 100%;

    & > img {
      width: 50rem;
    }
  }
`;

const totalImageCount = DUMMY_IMAGES.length - 1;

export const useImageSlider = (props) => {
  const [viewType, setViewType] = useState("carosel");
  const [currentCarosel, setCurrentCarosel] = useState(0);
  const slideRef = useRef(null);

  const changeViewTypeHandler = (type) => {
    setViewType(type);
  };

  const moveCarosel = (dir) => {
    if (dir === "left") {
      if (currentCarosel === 0) {
        setCurrentCarosel(totalImageCount);
      } else {
        setCurrentCarosel(currentCarosel - 1);
      }
    } else {
      if (currentCarosel === totalImageCount) {
        setCurrentCarosel(0);
      } else {
        setCurrentCarosel(currentCarosel + 1);
      }
    }
  };

  // TODO: 끝에서 0으로 돌아갈때는 애니메이션 효과 없애기
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    slideRef.current.style.transform = `translateX(-${currentCarosel}00%)`;
  }, [currentCarosel]);

  return { DUMMY_IMAGES, totalImageCount, Container, CaroselContainer };
};

export default useImageSlider;
