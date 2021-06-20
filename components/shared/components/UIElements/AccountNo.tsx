import React from 'react';

const AccountNo = ({ content }) => {
  // console.log(content);

  return (
    <section className='accountNo '>
      <h1 className='section-title--theme1'>마음 전하기</h1>
      <p className='sub-title text-content-theme1'>축의금을 전달해보세요.</p>
      <div className='accountNo__button-wrapper'>
        <div>
          <button className='accountNo__button'>신랑 계좌 보기</button>
          {/* <span className='mt-4'>신랑 계좌: {content.groom}</span> */}
        </div>
        <div>
          <button className='accountNo__button'>신부 계좌 보기</button>
          {/* <span>신부 계좌: {content.bride}</span> */}
        </div>
      </div>
    </section>
  );
};

export default AccountNo;
