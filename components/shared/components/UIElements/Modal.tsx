import React from "react";

const Modal = ({ src, alt, imageId }) => {
  return (
    <div className="flex z-50">
      <span className="text-white fixed top-0 left-0 ">1/9</span>
      <button className="text-white fixed top-2/4 left-1/4 ">left</button>
      <div className="fixed top-2/4 left-2/4  transform -translate-x-2/4 -translate-y-2/4 w-1/4 bg-white rounded-sm shadow-sm py-4 px-2 ">
        <img src={src} alt={alt} className="cursor-pointer" />
      </div>
      <button className="text-white fixed top-2/4 left-3/4 ">right</button>
    </div>
  );
};

export default Modal;
