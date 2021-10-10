import React, { ReactElement, useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';
import Toast from './ToastMessage';

const AccountNo = ({ content, themeId }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string | ReactElement>('');
  const [bankAddress, setBankAddress] = useState<string>('');

  const setModalContentAndShowModal = (p: 'groom' | 'bride') => {
    setIsModalOpen(true);

    let data;
    if (!content.groom.split('\n')) {
      data = p === 'groom' ? content.groom : content.bride;
      setModalContent(`${data}`);
      setBankAddress(data);
    } else {
      data =
        p === 'groom' ? content.groom.split('\n') : content.bride.split('\n');
      setModalContent(
        <div className='flex flex-col items-center'>
          <span className='mb-2'>{data[0]}</span>
          <span>예금주: {data[1]}</span>
        </div>
      );
      setBankAddress(data[0]);
    }
  };

  const copy = () => {
    const tempElem = document.createElement('textarea');
    tempElem.value = bankAddress;

    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand('copy');
    document.body.removeChild(tempElem);

    // show toast
    setIsToastOpen(true);

    setTimeout(() => {
      setIsToastOpen(false);
      // close modal
      setIsModalOpen(false);
    }, 1100);
  };
  return (
    <>
      {isToastOpen && <Toast isOpen={isToastOpen} content='복사완료!' />}
      {isModalOpen && (
        <>
          <Backdrop
            isShow={isModalOpen}
            onClick={() => setIsModalOpen(false)}
          />
          <Modal
            design={themeId}
            content={
              <div className='flex flex-col'>
                <span className='mb-4'>{modalContent}</span>
                <button
                  className={`accountNo__button--${themeId} w-full`}
                  onClick={copy}
                >
                  복사하기
                </button>
              </div>
            }
          />
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
