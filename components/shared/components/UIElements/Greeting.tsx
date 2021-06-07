import React from "react";

const Greeting = ({ content }) => {
  // console.log(content);

  return (
    <section id="greeting" className="intro-y mt-12 text-center">
      <h1 className="sr-only text-lg">greeting</h1>
      <p className="mb-4 sub-title">{content.title}</p>
      <p className="greeting-content font-medium">{content.content}</p>
    </section>
  );
};

export default Greeting;
