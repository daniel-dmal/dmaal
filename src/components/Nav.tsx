import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-100 w-full bg-gradient-to-b from-black to-black/0 p-[16px] lg:absolute">
      <div className="w-full items-center justify-between border-b-2 border-white text-white lg:bg-transparent">
        <div>
          <a href="/">
            <h2 className="font-base text-[24px] leading-none font-medium">
              DMAAL
            </h2>
          </a>
          <p className="text-[14px]">DANIEL MACIAS - Software Developer</p>
        </div>
        <></>
      </div>
    </nav>
  );
};

export default Nav;
