import React from "react";

const Services = () => {
  return (
    <>
      <div
        id="services"
        class="w-full lg:flex py-24 xl:py-28 space-y-6 lg:space-y-0"
      >
        <div class="w-full lg:w-1/3">
          <h6 class="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
            Services
          </h6>
          <h2 class="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
            What I
            <span class="bg-themeGradient bg-clip-text text-transparent">
              Do
            </span>
          </h2>
        </div>
        <div class="w-full lg:w-2/3 space-y-6">
          <div class="z-[1] p-8 space-y-3 md:space-y-0 md:flex md:items-center bg-darkBg rounded-lg relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient">
            <div class="md:w-[15%] text-white">
              <span class="font-outfit text-2xl xl:text-3xl font-medium">
                01/
              </span>
            </div>
            <div class="md:w-[40%] text-white">
              <i class="bi bi-brush text-3xl"></i>
              <h3 class="inline-flex pl-3 font-outfit font-medium text-2xl xl:text-3xl">
                Design
              </h3>
            </div>
            <div class="md:w-[45%]">
              <p class="text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
          <div class="z-[1] p-8 space-y-3 md:space-y-0 md:flex md:items-center bg-darkBg rounded-lg relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient">
            <div class="md:w-[15%] text-white">
              <span class="font-outfit text-2xl xl:text-3xl font-medium">
                02/
              </span>
            </div>
            <div class="md:w-[40%] text-white">
              <i class="bi bi-code-slash text-3xl"></i>
              <h3 class="inline-flex pl-3 font-outfit font-medium text-2xl xl:text-3xl">
                Development
              </h3>
            </div>
            <div class="md:w-[45%]">
              <p class="text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
          <div class="z-[1] p-8 space-y-3 md:space-y-0 md:flex md:items-center bg-darkBg rounded-lg relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient">
            <div class="md:w-[15%] text-white">
              <span class="font-outfit text-2xl xl:text-3xl font-medium">
                03/
              </span>
            </div>
            <div class="md:w-[40%] text-white">
              <i class="bi bi-laptop text-3xl"></i>
              <h3 class="inline-flex pl-3 font-outfit font-medium text-2xl xl:text-3xl">
                Marketing
              </h3>
            </div>
            <div class="md:w-[45%]">
              <p class="text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
