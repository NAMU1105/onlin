import React from "react";

const AccountNo = ({ content }) => {
  // console.log(content);

  return (
    <section className="accountNo intro-y mt-12 text-center">
      <h1 className="sub-title mb-4">신랑 & 신부에게 마음 전하기</h1>
      <p>축복의 의미로 축의금을 전달해보세요.</p>
      <div className="flex flex-col">
        <div>
          <button>신랑 계좌 보기</button>
          <span className="mt-4">신랑 계좌: {content.groom}</span>
        </div>
        <div>
          <button>신부 계좌 보기</button>
          <span>신부 계좌: {content.bride}</span>
        </div>
      </div>
    </section>
  );
};

export default AccountNo;
