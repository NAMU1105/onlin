import React from "react";

const Backdrop = (props) => {
  return (
    <div
      className="fixed z-10 w-full h-screen top-0 left-0 bg-backdrop"
      onClick={props.onClick}
    ></div>
  );
};

export default Backdrop;
