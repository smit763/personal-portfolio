import React from "react";
import client1 from "../../assets/images/client-1.png";
import client2 from "../../assets/images/client-2.png";
import client3 from "../../assets/images/client-3.png";
import client4 from "../../assets/images/client-4.png";
import client5 from "../../assets/images/client-5.png";
import client6 from "../../assets/images/client-6.png";
import { Swiper, SwiperSlide } from "swiper/react";

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
          <SwiperSlide>
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client1} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client2} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client3} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client4} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client5} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="opacity-65 hover:opacity-100 transition ease-out duration-100">
              <a href="#">
                <img src={client6} alt="" />
              </a>
            </div>
          </SwiperSlide>
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
