import React from "react";

const Modal = ({ src, alt }) => {
  return (
    <div className="z-50 fixed top-2/4 left-2/4 w-1/4 bg-white rounded-sm shadow-sm py-4 px-2 transform -translate-x-2/4 -translate-y-2/4 ">
      {/* <header className="w-full py-4 px-2 bg-gray-50 ">
        <h2 className="m-2">{props.header}</h2>
      </header> */}
      {/* <div className=" py-4 px-2">{props.children}</div> */}
      <img src={src} alt={alt} className="cursor-pointer" />
      {/* <footer className=" py-4 px-2 text-right">{props.footer}</footer> */}
    </div>
  );
};

export default Modal;
