import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AllTechnoLogies } from "../../Utils/Projects/Projects";
import { Autoplay } from "swiper/modules";

const Clients = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 24 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Autoplay]}
        className="swiper  !pb-10 lg:!pb-24 xl:!pb-28"
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
