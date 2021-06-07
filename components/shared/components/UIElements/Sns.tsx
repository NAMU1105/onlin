import React from "react";
import * as Icon from "react-feather";

//  TODO: 공유하기 기능 추가
const Sns = ({ content }) => {
  console.log("sns: ", content);

  const returnIcon = (content) => {
    let icon;
    switch (content) {
      case "kakao":
        icon = <Icon.MessageCircle />;
        break;
      case "facebook":
        icon = <Icon.Facebook />;
        break;
      case "twitter":
        icon = <Icon.Twitter />;
        break;

      default:
        icon = <Icon.MessageSquare />;
        break;
    }
    return icon;
  };

  return (
    <section className="sns intro-y mt-12 text-center">
      <h1 className="sub-title mb-4">공유하기</h1>
      <article className="grid grid-cols-4 gap-4 mb-12">
        {content.snsList.map((sns) => (
          <div key={sns} className="flex items-center cursor-pointer">
            {returnIcon(sns)}
            <div>{sns}</div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Sns;
