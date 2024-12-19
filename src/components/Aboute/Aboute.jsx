import React from "react";
import heroImage from "../../assets/images/hero-avatar.jpg"

const Aboute = () => {
  return (
    <>
      <div class="lg:flex space-y-8 lg:space-y-0">
        <div class="w-full lg:w-1/3 lg:order-2 text-center">
          <img
            class="inline-block w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full"
            src={heroImage}
            alt=""
          />
        </div>
        <div class="w-full lg:w-1/3 lg:order-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
          <div>
            <h6 class="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Biography
            </h6>
            <p class="text-white/70 leading-[1.75]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div>
            <h6 class="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Skills
            </h6>
            <ul class="text-white/70">
              <li class="list-none inline-block pr-[4px]">Web Development</li>
              <li class="list-none inline-block relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                UI & UX Design
              </li>
              <li class="list-none inline-block relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                Marketing
              </li>
              <li class="list-none inline-block relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                SEO
              </li>
              <li class="list-none inline-block relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                Management
              </li>
            </ul>
          </div>
          <div>
            <h6 class="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Connect
            </h6>
            <ul class="space-x-1">
              <li class="list-none inline-block">
                <a
                  class="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                  href="#"
                >
                  <i class="bi bi-facebook absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0"></i>
                  <i class="bi bi-facebook absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100"></i>
                </a>
              </li>
              <li class="list-none inline-block">
                <a
                  class="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                  href="#"
                >
                  <i class="bi bi-twitter-x absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0"></i>
                  <i class="bi bi-twitter-x absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100"></i>
                </a>
              </li>
              <li class="list-none inline-block">
                <a
                  class="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                  href="#"
                >
                  <i class="bi bi-instagram absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0"></i>
                  <i class="bi bi-instagram absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-1/3 order-3 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-7 lg:text-right">
          <div>
            <h6 class="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Projects Done
            </h6>
            <span class="text-4xl lg:text-5xl xl:text-6xl font-sansSerif font-light text-white">
              432
            </span>
          </div>
          <div>
            <h6 class="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Years of Experience
            </h6>
            <span class="text-4xl lg:text-5xl xl:text-6xl font-sansSerif font-light text-white">
              13+
            </span>
          </div>
          <div>
            <h6 class="font-sansSerif font-medium tracking-wider uppercase text-sm text-white mb-2">
              Worldwide Clients
            </h6>
            <span class="text-4xl lg:text-5xl xl:text-6xl font-sansSerif font-light text-white">
              900
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboute;
