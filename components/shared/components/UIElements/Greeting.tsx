import React from "react";

const Greeting = ({ content }) => {
  // console.log(content);

  return (
    <div className="intro-y">
      <p>{content.title}</p>
      <p>{content.content}</p>
    </div>
  );
};

export default Greeting;
