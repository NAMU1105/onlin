import React from "react";
import Link from "next/link";

const NavLinks = (props) => {
  const { linkType, title } = props;

  let elem;

  if (linkType === "a") {
    elem = (
      <a
        href="#"
        className="uppercase text-base font-medium text-gray-500 hover:text-gray-900"
      >
        {title}
      </a>
    );
  } else {
    elem = (
      <div className="relative">
        {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
        <button
          type="button"
          className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-expanded="false"
        >
          <span className="uppercase">{title}</span>
          {/* <!--
                Heroicon name: solid/chevron-down
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              --> */}
          <svg
            className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* <Dropdown /> */}
      </div>
    );
  }
  return <>{elem}</>;
};

export default NavLinks;
