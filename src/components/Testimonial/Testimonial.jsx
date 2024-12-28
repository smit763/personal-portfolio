import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { clientReviews } from "../../Utils/Projects/Projects";

const Testimonial = () => {
  return (
    <>
      <div
        id="testimonial"
        className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 py-24 xl:py-28"
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
          <div className="swiper-wrapper">
            {clientReviews.map((res) => (
              <SwiperSlide key={res.id}>
                <div className="lg:flex lg:items-center lg:space-x-12 text-center lg:text-left relative">
                  <div className="inline-block mb-3 lg:mb-0 w-[200px] min-w-[200px] md:w-[240px] md:min-w-[240px] lg:w-[260px] lg:min-w-[260px] xl:w-[280px] xl:min-w-[280px]">
                    <img
                      className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px] rounded-full"
                      src={res.image}
                      alt=""
                      data-rjs="2"
                    />
                  </div>
                  <div>
                    <div className="mb-3">
                      <h3 className="font-outfit font-medium text-2xl xl:text-3xl text-white mb-2">
                        {res.name}
                      </h3>
                      <span className="block font-outfit font-medium uppercase text-sm tracking-wider text-white">
                        {res.role}
                      </span>
                    </div>
                    <p className="text-xl xl:text-2xl italic text-white/70 leading-normal">
                      {res.review}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 opacity-20 text-white text-7xl xl:text-8xl">
                    <i className="bi bi-quote"></i>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-testimonial-pagination"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
