import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface BackdropProps {
  children: ReactNode;
  isShow: boolean;
  onClick?: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props: BackdropProps) => {
  useEffect(() => {
    if (!props.isShow) return;
    return () => {
      // 스크롤 방지 해제
      document.body.style.overflow = 'unset';
    };
  }, [props.isShow]);

  return ReactDOM.createPortal(
    <div
      className={props.isShow ? `backdrop` : 'hidden w-0 h-0'}
      onClick={props.onClick}
    >
      {props.children}
    </div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
