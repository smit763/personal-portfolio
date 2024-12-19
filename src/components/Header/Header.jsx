import React from "react";

const Header = () => {
  return (
    <>
      <div className="z-10 fixed top-0 left-0 w-full py-5">
        <div className="container mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex justify-between relative">
            <div className="text-3xl font-sansSerif font-medium text-white">
              Web Developer
            </div>
            <div>
              <ul className="space-x-2">
                <li className="list-none inline-block">
                  <div
                    id="nav-toggle"
                    className="inline-block relative z-[1] overflow-hidden cursor-pointer group px-5 py-2.5 pr-[34px] bg-white text-black font-sansSerif rounded-3xl text-sm font-medium tracking-wider after:content-[''] after:absolute after:top-1/2 after:right-[20px] after:-translate-y-1/2 after:bg-black after:w-[5px] after:h-[5px] after:rounded-full after:transition-all after:duration-[60ms] hover:after:opacity-40 hover:after:scale-[2.7] cursor-link"
                  >
                    <span
                      className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-black before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-black after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                      data-text="Download CV"
                    >
                      Download CV
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
