import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  content: any;
  design?: 'template1' | 'template2' | 'template3';
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <div className={`modal modal--${props.design}`}>{props.content}</div>,
    document!.getElementById('modal-hook')
  );
};

export default Modal;
