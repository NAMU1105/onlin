import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Image from "../shared/components/UIElements/Image";
import Video from "../shared/components/UIElements/Video";
// import Backdrop from "../shared/components/UIElements/Backdrop";

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

type ContainerTypeProps = {
  display: string;
};

const Gallery = (props) => {
  const totalCaroselCount = DUMMY_IMAGES.length - 1;
  // console.log(totalCaroselCount);

  const [viewType, setViewType] = useState("carosel");
  const [currentCarosel, setCurrentCarosel] = useState(0);
  const slideRef = useRef(null);

  const changeViewTypeHandler = (type) => {
    setViewType(type);
  };

  const moveCarosel = (dir) => {
    if (dir === "left") {
      if (currentCarosel === 0) {
        setCurrentCarosel(totalCaroselCount);
      } else {
        setCurrentCarosel(currentCarosel - 1);
      }
    } else {
      if (currentCarosel === totalCaroselCount) {
        setCurrentCarosel(0);
      } else {
        setCurrentCarosel(currentCarosel + 1);
      }
    }
  };

  // TODO: 끝에서 0으로 돌아갈때는 애니메이션 효과 없애기
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentCarosel}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentCarosel]);

  let elem;
  if (viewType === "carosel") {
    elem = (
      <div className="flex">
        <button
          onClick={() => {
            moveCarosel("left");
          }}
          className="bg-red-200 px-10 py-5 mr-5"
        >
          left
        </button>
        <CaroselContainer>
          <div className="caroselTestWrapper" ref={slideRef}>
            {DUMMY_IMAGES.map((image) => {
              return (
                <Image
                  key={image.id}
                  id={image.id}
                  src={image.src}
                  alt="couple"
                  totalCount={totalCaroselCount}
                />
              );
            })}
          </div>
        </CaroselContainer>
        <button
          onClick={() => {
            moveCarosel("right");
          }}
          className="bg-red-200 px-10 py-5 ml-5"
        >
          right
        </button>
      </div>
    );
  } else {
    elem = (
      <Container display={viewType}>
        {DUMMY_IMAGES.map((image) => {
          return (
            <Image
              key={image.id}
              id={image.id}
              src={image.src}
              alt="couple"
              totalCount={totalCaroselCount}
            />
          );
        })}
      </Container>
    );
  }

  return (
    <>
      <section className="gallery flex flex-col items-center">
        <h1 className="capitalize">gallery</h1>
        <div className="flex">
          <button
            className="bg-gray-400 px-10 py-2 m-5 rounded-lg shadow-lg"
            onClick={() => {
              changeViewTypeHandler("grid");
            }}
          >
            Grid
          </button>
          <button
            className="bg-gray-400 px-10 py-2 m-5 rounded-lg shadow-lg"
            onClick={() => {
              changeViewTypeHandler("flex");
            }}
          >
            List
          </button>
          <button
            className="bg-gray-400 px-10 py-2 m-5 rounded-lg shadow-lg"
            onClick={() => {
              changeViewTypeHandler("carosel");
            }}
          >
            Carosel
          </button>
        </div>
        {elem}
        <h1>영상보기</h1>
        <Video />
      </section>
    </>
  );
};

export default Gallery;
