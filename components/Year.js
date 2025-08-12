import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);
const Year = () => {
  return (
    <div
      className="bg-gradient-to-t from-[#FFFFFF] to-[#F6F1E2] via-[#1CB4E0] pt-12"
      style={{ height: "80vh" }}
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        className="mySwiper w-1/5 h-5/6"
      >
        <SwiperSlide className="bg-red-500 rounded-md">
          <div className="flex font-extrabold text-3xl text-center h-full items-center w-full px-2">
            Pick this to know our story
            <img
              src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              className="w-1/5"
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#0C71A5] rounded-md">
          <div className="flex font-extrabold text-3xl text-center h-full items-center w-full px-2">
            Year Of Establishment<br></br>
            1985
            <img src="Group 2.svg" className="w-1/5"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 rounded-md">
          <div className="flex font-extrabold text-3xl text-center h-full items-center w-full px-2">
            40 & More Satisfied Clients
            <img src="Employees.svg" className="w-1/5"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md bg-[#0C71A5]">
          <div className="flex font-extrabold text-3xl text-center h-full items-center w-full px-2">
            3 Awards & Recognition
            <img src="Awards.svg" className="w-1/5"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md bg-red-500">
          <div className="flex font-extrabold text-3xl text-center h-full items-center w-full px-2">
            200 & More Happy Employees
            <img src="Clients.svg" className="w-1/5"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Year;
