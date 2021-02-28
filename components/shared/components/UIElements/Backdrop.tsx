import React from "react";

const Backdrop = (props) => {
  return (
    <div
      id="backdrop"
      className="fixed z-10 w-full h-screen top-0 left-0 bg-backdrop"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
