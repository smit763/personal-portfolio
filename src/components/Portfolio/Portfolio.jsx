import React from "react";
import portfolio1 from "../../assets/images/portfolio-1.jpg";
import portfolio2 from "../../assets/images/portfolio-2.jpg";
import portfolio3 from "../../assets/images/portfolio-3.jpg";
import portfolio4 from "../../assets/images/portfolio-4.jpg";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" class="px-5 lg:px-10">
        <div class="bg-darkBg rounded-2xl overflow-hidden py-20">
          <div class="container mx-auto max-w-[1320px] px-5">
            <div class="md:w-4/5 lg:w-3/4 md:mx-auto">
              <h6 class="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
                Portfolio
              </h6>
              <h2 class="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
                Recent
                <span class="bg-themeGradient bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p class="leading-[1.75] text-white/70 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <div class="space-x-1 mt-6">
                <div class="swiper-portfolio-prev inline-block group w-[50px] h-[50px] rounded-full cursor-pointer bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100 cursor-link">
                  <i class="bi bi-arrow-left absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0"></i>
                  <i class="bi bi-arrow-left absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100"></i>
                </div>
                <div class="swiper-portfolio-next inline-block group w-[50px] h-[50px] rounded-full cursor-pointer bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100 cursor-link">
                  <i class="bi bi-arrow-right absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0"></i>
                  <i class="bi bi-arrow-right absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100"></i>
                </div>
              </div>
            </div>
            <div class="swiper portfolio-slider overflow-visible mt-6 xl:mt-14">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="group/portfolio-box">
                    <div class="overflow-hidden relative rounded-2xl">
                      <a
                        class="group block relative before:content-[''] before:z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100"
                        href="portfolio-single.html"
                      >
                        <img
                          class="group-hover:scale-105 transition ease-custom duration-500"
                          src={portfolio1}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="pt-6">
                      <ul class="text-white font-outfit font-medium uppercase text-sm tracking-wider">
                        <li class="list-none inline-block leading-none pr-[4px]">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                        <li class="list-none inline-block leading-none relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                        <li class="list-none inline-block leading-none relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div class="mt-2">
                        <h2 class="relative font-outfit font-medium text-3xl">
                          <a
                            class="text-white group-hover/portfolio-box:pl-[44px] transition-all ease-out duration-200"
                            href="portfolio-single.html"
                          >
                            <span class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/portfolio-box:opacity-100 group-hover/portfolio-box:-translate-x-0 transition duration-100">
                              <i class="bi bi-arrow-right"></i>
                            </span>
                            Fold Twist Abstract
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="group/portfolio-box">
                    <div class="overflow-hidden relative rounded-2xl">
                      <a
                        class="group block relative before:content-[''] before:z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100"
                        href="portfolio-single.html"
                      >
                        <img
                          class="group-hover:scale-105 transition ease-custom duration-500"
                          src={portfolio2}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="pt-6">
                      <ul class="text-white font-outfit font-medium uppercase text-sm tracking-wider">
                        <li class="list-none inline-block leading-none pr-[4px]">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                        <li class="list-none inline-block leading-none relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                        <li class="list-none inline-block leading-none relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div class="mt-2">
                        <h2 class="relative font-outfit font-medium text-3xl">
                          <a
                            class="text-white group-hover/portfolio-box:pl-[44px] transition-all ease-out duration-200"
                            href="portfolio-single.html"
                          >
                            <span class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/portfolio-box:opacity-100 group-hover/portfolio-box:-translate-x-0 transition duration-100">
                              <i class="bi bi-arrow-right"></i>
                            </span>
                            Colors of Circle
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="group/portfolio-box">
                    <div class="overflow-hidden relative rounded-2xl">
                      <a
                        class="group block relative before:content-[''] before:z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100"
                        href="portfolio-single.html"
                      >
                        <img
                          class="group-hover:scale-105 transition ease-custom duration-500"
                          src={portfolio3}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="pt-6">
                      <ul class="text-white font-outfit font-medium uppercase text-sm tracking-wider">
                        <li class="list-none inline-block leading-none pr-[4px]">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                        <li class="list-none inline-block leading-none relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                        <li class="list-none inline-block leading-none relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div class="mt-2">
                        <h2 class="relative font-outfit font-medium text-3xl">
                          <a
                            class="text-white group-hover/portfolio-box:pl-[44px] transition-all ease-out duration-200"
                            href="portfolio-single.html"
                          >
                            <span class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/portfolio-box:opacity-100 group-hover/portfolio-box:-translate-x-0 transition duration-100">
                              <i class="bi bi-arrow-right"></i>
                            </span>
                            Fold Twist Abstract
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="group/portfolio-box">
                    <div class="overflow-hidden relative rounded-2xl">
                      <a
                        class="group block relative before:content-[''] before:z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100"
                        href="portfolio-single.html"
                      >
                        <img
                          class="group-hover:scale-105 transition ease-custom duration-500"
                          src={portfolio4}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="pt-6">
                      <ul class="text-white font-outfit font-medium uppercase text-sm tracking-wider">
                        <li class="list-none inline-block leading-none pr-[4px]">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                        <li class="list-none inline-block leading-none relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                        <li class="list-none inline-block leading-none relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                          <a class="inline-block overflow-hidden" href="#">
                            <span
                              class="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100"
                              data-text="Category"
                            >
                              Category
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div class="mt-2">
                        <h2 class="relative font-outfit font-medium text-3xl">
                          <a
                            class="text-white group-hover/portfolio-box:pl-[44px] transition-all ease-out duration-200"
                            href="portfolio-single.html"
                          >
                            <span class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/portfolio-box:opacity-100 group-hover/portfolio-box:-translate-x-0 transition duration-100">
                              <i class="bi bi-arrow-right"></i>
                            </span>
                            Visual Art of Cubes
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
