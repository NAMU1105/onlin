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

type ContainerTypeProps = {
  display: string;
};

const dynamicStyle = (props: ContainerTypeProps) =>
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
const totalImageCount = DUMMY_IMAGES.length + 1;

export const useImage = (props) => {
  const [viewType, setViewType] = useState("carosel");

  const changeViewTypeHandler = (type) => {
    setViewType(type);
  };

  return {
    DUMMY_IMAGES,
    totalImageCount,
    Container,
    viewType,
    changeViewTypeHandler,
  };
};

export default useImage;
