import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import img1 from "../../assets/images/testimonial-1.jpg";
import img2 from "../../assets/images/testimonial-2.jpg";
import img3 from "../../assets/images/testimonial-3.jpg";

const Testimonial = () => {
  return (
    <>
      <div
        id="testimonial"
        class="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 py-24 xl:py-28"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          pagination={{
            el: ".swiper-testimonial-pagination",
            type: "progressbar",
          }}
          modules={[Pagination]}
          className="mySwiper testimonial-slider relative pb-5 lg:pb-0"
        >
          <div class="swiper-wrapper">
            <SwiperSlide>
              <div class="lg:flex lg:items-center lg:space-x-12 text-center lg:text-left relative">
                <div class="inline-block mb-3 lg:mb-0 w-[200px] min-w-[200px] md:w-[240px] md:min-w-[240px] lg:w-[260px] lg:min-w-[260px] xl:w-[280px] xl:min-w-[280px]">
                  <img
                    class="w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px] rounded-full"
                    src={img1}
                    alt=""
                    data-rjs="2"
                  />
                </div>
                <div>
                  <div class="mb-3">
                    <h3 class="font-outfit font-medium text-2xl xl:text-3xl text-white mb-2">
                      Marcella Leonard
                    </h3>
                    <span class="block font-outfit font-medium uppercase text-sm tracking-wider text-white">
                      Creative Director
                    </span>
                  </div>
                  <p class="text-xl xl:text-2xl italic text-white/70 leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
                <div class="absolute top-0 right-0 opacity-20 text-white text-7xl xl:text-8xl">
                  <i class="bi bi-quote"></i>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="lg:flex lg:items-center lg:space-x-12 text-center lg:text-left relative">
                <div class="inline-block mb-3 lg:mb-0 w-[200px] min-w-[200px] md:w-[240px] md:min-w-[240px] lg:w-[260px] lg:min-w-[260px] xl:w-[280px] xl:min-w-[280px]">
                  <img
                    class="w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px] rounded-full"
                    src={img2}
                    alt=""
                    data-rjs="2"
                  />
                </div>
                <div>
                  <div class="mb-3">
                    <h3 class="font-outfit font-medium text-2xl xl:text-3xl text-white mb-2">
                      Bradley Mendez
                    </h3>
                    <span class="block font-outfit font-medium uppercase text-sm tracking-wider text-white">
                      CTO - FlaTheme
                    </span>
                  </div>
                  <p class="text-xl xl:text-2xl italic text-white/70 leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
                <div class="absolute top-0 right-0 opacity-20 text-white text-7xl xl:text-8xl">
                  <i class="bi bi-quote"></i>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="lg:flex lg:items-center lg:space-x-12 text-center lg:text-left relative">
                <div class="inline-block mb-3 lg:mb-0 w-[200px] min-w-[200px] md:w-[240px] md:min-w-[240px] lg:w-[260px] lg:min-w-[260px] xl:w-[280px] xl:min-w-[280px]">
                  <img
                    class="w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px] rounded-full"
                    src={img3}
                    alt=""
                    data-rjs="2"
                  />
                </div>
                <div>
                  <div class="mb-3">
                    <h3 class="font-outfit font-medium text-2xl xl:text-3xl text-white mb-2">
                      Linda Adams
                    </h3>
                    <span class="block font-outfit font-medium uppercase text-sm tracking-wider text-white">
                      Project Manager
                    </span>
                  </div>
                  <p class="text-xl xl:text-2xl italic text-white/70 leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
                <div class="absolute top-0 right-0 opacity-20 text-white text-7xl xl:text-8xl">
                  <i class="bi bi-quote"></i>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-testimonial-pagination"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
