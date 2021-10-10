import React from 'react';
import ReactDOM from 'react-dom';

interface ToastProps {
  content: string;
  isOpen: boolean;
}

const ToastMessage: React.FC<ToastProps> = (props: ToastProps) => {
  return ReactDOM.createPortal(
    <div className={`${props.isOpen ? 'toast ' : ''}`}>{props.content}</div>,
    document.getElementById('modal-hook')
  );
};

export default ToastMessage;
