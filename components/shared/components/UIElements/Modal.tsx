import React, { useRef, useState, useEffect } from 'react';

interface ModalProps {
  content: any;
  design?: 'template1' | 'template2' | 'template3';
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return <div className={`modal modal--${props.design}`}>{props.content}</div>;
};

export default Modal;
