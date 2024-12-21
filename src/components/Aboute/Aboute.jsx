import React from "react";
import heroImage from "../../assets/images/hero-avatar.jpg";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Aboute = () => {
  return (
    <>
      <div className="lg:flex space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/3 lg:order-2 text-center">
          <img
            className="inline-block w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full"
            src={heroImage}
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/3 lg:order-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
          <div>
            <h6 className="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Biography
            </h6>
            <p className="text-white/70 leading-[1.75]">
              A web developer driven by problem-solving and creativity.
              Expertise includes building scalable, high-performance websites
              with intuitive user interfaces and robust back-end systems. skills
            </p>
          </div>
          <div>
            <h6 className="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Skills
            </h6>
            <ul className="text-white/70">
              <li className="list-none inline-block pr-[4px]">
                Web Development
              </li>
              <li className="list-none inline-block relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                DevOps
              </li>
              <li className="list-none inline-block relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                Project Management
              </li>
              <li className="list-none inline-block relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                Version Control
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Connect
            </h6>
            <ul className="space-x-1">
              <li className="list-none inline-block">
                <a
                  className="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                  href="#"
                >
                  <TbBrandFiverr className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0" />
                  <TbBrandFiverr className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100" />
                </a>
              </li>
              <li className="list-none inline-block">
                <a
                  className="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                  href="#"
                >
                  <FaLinkedin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0" />
                  <FaLinkedin className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100" />
                </a>
              </li>
              <li className="list-none inline-block">
                <a
                  className="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                  href="#"
                >
                  <BiLogoGmail className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0"/>
                  <BiLogoGmail className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/3 order-3 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-7 lg:text-right">
          <div>
            <h6 className="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Projects Done
            </h6>
            <span className="text-4xl lg:text-5xl xl:text-6xl font-sansSerif font-light text-white">
              132
            </span>
          </div>
          <div>
            <h6 className="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Years of Experience
            </h6>
            <span className="text-4xl lg:text-5xl xl:text-6xl font-sansSerif font-light text-white">
              2.5+
            </span>
          </div>
          <div>
            <h6 className="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Worldwide Clients
            </h6>
            <span className="text-4xl lg:text-5xl xl:text-6xl font-sansSerif font-light text-white">
              17+
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboute;
