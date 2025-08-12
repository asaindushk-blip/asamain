import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const Mission = () => {
  return (
    <div className="w-full bg-[#C4c4c4] grid grid-cols-2 mt-20 relative ">
      <div>
        <img src="Mission.png" className="h-full"></img>
      </div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper w-5/6"
      >
        <SwiperSlide>
          <div className="grid grid-rows-1 h-full text-justify md:text-center pt-8">
            <img src="ASA_A.png" alt="ASA Vector"></img>
            <div className=" absolute md:top-40 sm:top-16">
              <div className="md:text-4xl text-6xl font-bold md:font-semibold text-center">
                Mission
              </div>
              <div className="md:text-2xl text-3xl md:pt-24 pt-0 sm:px-24 px-0">
                Our mission is to be the most dynamic and rapidly growing
                organization by having teams with a blend of both Subject Matter
                Experts and Versatile team player. We aim to build the most
                efficient value chain with high quality products and become a
                benchmark for both quality and price in whatever product we
                manufacture.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-rows-1 h-full text-justify sm:text-center sm:pt-8">
            <img src="ASA_A.png" alt="ASA Vector"></img>
            <div className=" absolute md:top-40 sm:top-16">
              <div className="md:text-4xl text-6xl font-bold md:font-semibold text-center">
                Vision
              </div>
              <div className="md:text-2xl sm:text-3xl text-4xl sm:pt-24 pt-0 sm:px-24 px-0">
                Our vision is to re-define current Indian manufacturing
                landscape by being the first movers/adopters in both technical
                and cultural aspects. We believe in embracing innovative
                leadership and creative teamwork to reap the best benefits for
                our stakeholders.
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Mission;
