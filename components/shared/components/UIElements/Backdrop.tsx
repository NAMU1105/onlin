import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  children: ReactNode;
}
let isMonted = false;

const Backdrop: React.FC<BackdropProps> = (props: BackdropProps) => {
  useEffect(() => {
    if (!isMonted) isMonted = true;

    if (isMonted) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    return () => {
      // 스크롤 방지 해제
      document.body.style.overflow = "unset";
    };
  });

  return ReactDOM.createPortal(
    <div className="w-screen h-screen bg-black fixed z-50 top-0 left-0">
      {props.children}
    </div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
