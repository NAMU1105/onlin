import React, { useRef, useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

// 이미지 온클릭 시 모달창으로 띄워주기
const Image = ({ id, src, alt }) => {
  const [isModalOpened, setModalOpened] = useState<boolean>(false);

  const toggleModal = () => {
    console.log("clicked");
    console.log(id);

    toggleModalOpen();
    // console.log(isModalOpened);
    // console.log(ImageRef.current);
  };

  const toggleModalOpen = () => {
    setModalOpened((prev) => !prev);
  };

  return (
    <>
      {isModalOpened && (
        <>
          <Backdrop onClick={toggleModalOpen} />
          <Modal src={src} alt={alt} imageId={id}></Modal>
        </>
      )}

      <img
        src={src}
        alt={alt}
        onClick={toggleModal}
        className="cursor-pointer"
      />
    </>
  );
};

export default Image;
