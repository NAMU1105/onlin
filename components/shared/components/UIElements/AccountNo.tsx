import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const AccountNo = ({ content, themeId }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>('');

  const setModalContentAndShowModal = (p: 'groom' | 'bride') => {
    setIsModalOpen(true);

    setModalContent(p === 'groom' ? `${content.groom}` : `${content.bride}`);
  };
  return (
    <>
      {isModalOpen && (
        <>
          <Backdrop isShow={isModalOpen} onClick={() => setIsModalOpen(false)}>
            <Modal content={modalContent} design={themeId} />
          </Backdrop>
        </>
      )}

      <section className='accountNo '>
        <h1 className={`section-title--${themeId}`}>마음 전하기</h1>
        <p className={`sub-title text-content--${themeId} -mt-4`}>
          축의금을 전달해보세요.
        </p>
        <div className='accountNo__button-wrapper'>
          <div>
            <button
              className={`accountNo__button--${themeId}`}
              onClick={() => setModalContentAndShowModal('groom')}
            >
              신랑 계좌 보기
            </button>
            {/* <span className='mt-4'>신랑 계좌: {content.groom}</span> */}
          </div>
          <div>
            <button
              className={`accountNo__button--${themeId}`}
              onClick={() => setModalContentAndShowModal('bride')}
            >
              신부 계좌 보기
            </button>
            {/* <span>신부 계좌: {content.bride}</span> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountNo;
