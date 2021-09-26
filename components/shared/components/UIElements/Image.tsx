import React, { useRef, useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';
import Slider from './Slider';

// 이미지 온클릭 시 모달창으로 띄워주기
const Image = ({ id, src, alt, totalCount }) => {
  const [isModalOpened, setModalOpened] = useState<boolean>(false);

  const toggleModal = () => {
    // console.log("clicked");
    // console.log(id);

    toggleModalOpen();
    // console.log(isModalOpened);
    // console.log(ImageRef.current);
  };

  const toggleModalOpen = () => setModalOpened((prev) => !prev);

  return (
    <>
      {isModalOpened && (
        <>
          <Backdrop>
            {/* <Backdrop onClick={toggleModalOpen}> */}
            <Slider onClick={toggleModalOpen} />
          </Backdrop>
          {/* <Modal
            src={src}
            alt={alt}
            imageId={id + 1}
            totalCount={totalCount}
          ></Modal> */}
        </>
      )}

      <img
        id={id}
        src={src}
        alt={alt}
        onClick={toggleModal}
        className='cursor-pointer w-full mr-0'
      />
    </>
  );
};

export default Image;
