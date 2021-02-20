import React from "react";

const Logo = (props) => {
  const { withLink, classStyle } = props;

  let elem;

  if (withLink) {
    elem = (
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span className="sr-only">Workflow</span>
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="logo"
          />
        </a>
      </div>
    );
  } else {
    elem = (
      <img
        className={classStyle}
        // className="h-8 w-auto sm:h-10"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="logo"
      />
    );
  }

  return elem;
};

export default Logo;
