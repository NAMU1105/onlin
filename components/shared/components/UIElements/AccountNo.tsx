import React from "react";

const AccountNo = ({ content }) => {
  // console.log(content);

  return (
    <div className="accountNo intro-y">
      <span>신랑 계좌: {content.groom}</span>
      <span>신부 계좌: {content.bride}</span>
    </div>
  );
};

export default AccountNo;
