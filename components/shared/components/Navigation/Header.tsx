import React, { useState } from "react";
import Link from "next/link";

import DropdownMobile from "./Dropdown/Dropdown-Mobile";
import NavLinks from "./NavLinks";
import Logo from "../UIElements/Logo";

// type DropdownMobileType = {
// }

const Header = (props) => {
  const [isOpenDropdownMobile, setDropdownMobile] = useState<string>("hidden");

  const toggleDropdownMobile = () => {
    if (isOpenDropdownMobile === "hidden") {
      setDropdownMobile("");
    } else {
      setDropdownMobile("hidden");
    }
  };

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <Logo withLink classStyle="h-8 w-auto sm:h-10" />

          {/* 반응형 햄버거 메뉴 */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={toggleDropdownMobile}
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* TODO: 메뉴 종류도 하드코딩이 아니라 백엔드에서 넘어오는 정보로 만들 수 있도록 고려해보기 */}
          <nav className="hidden md:flex space-x-10">
            <NavLinks linkType="button" title="OLIN" />
            <NavLinks
              linkType="a"
              title="EXAMPLES"
              // to="/components/shared/components/UIElements/Gallery/Gallery.tsx"
            />
            <NavLinks linkType="a" title="DOCS" />
            <NavLinks linkType="button" title="MORE" />
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/auth">
              <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a>
            </Link>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
      <DropdownMobile
        open={isOpenDropdownMobile}
        onToggle={toggleDropdownMobile}
      />
    </div>
  );
};

export default Header;
