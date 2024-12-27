import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AllTechnoLogies } from "../../Utils/Projects/Projects";

const Clients = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 24 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        className="swiper !pb-24 xl:!pb-28"
      >
        <div className="swiper-wrapper">
          {AllTechnoLogies.map((res) => (
            <SwiperSlide key={res.id}>
              <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
                <a href="#">
                  <img src={res.icon} alt={res.name} />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {/* <div className="swiper clients-slider pb-24 xl:pb-28">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client1} alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client2} alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client3} alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client4} alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src="assets/images/client-5.png" alt="" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src="assets/images/client-6.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Clients;
