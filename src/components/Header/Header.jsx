import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`z-10 sm:fixed  left-1/2 -translate-x-1/2  transition-all mx-auto duration-300 rounded-md ${
          isScrolled ? "bg-gray-800/20 backdrop-blur-2xl shadow-lg py-2 top-2   w-[95%]" : "bg-transparent py-5 top-0  w-full"
        }`}
      >
        <div className="container mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex justify-between relative items-center">
            <div className="sm:text-3xl text-xl font-sansSerif font-medium text-white">
              Web Developer
            </div>
            <div>
              <ul className="space-x-2">
                <li className="list-none  flex">
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
      </header>
    </>
  );
};

export default Header;
