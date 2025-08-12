import NavbarMobile from "../components/navbar/NavbarMobile";
import Navbar from "../components/navbar/NavbarDesktop";
import Head from "next/head";
import Location from "../components/contact/phone";
import Phone from "../components/contact/location";
import Social from "../components/contact/social.js";
import Footer from "../components/Footer.js";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Input = ({ field, placeholder, talker, setTalker }) => {
  const set = (e) =>
    setTalker({
      ...talker,
      [field]: e.target.value,
    });

  return field !== "message" ? (
    <div className="flex flex-col">
      <div class="font-semibold">{placeholder}</div>
      <input
        className="w-full h-12 px-4 py-2 border-2 border-blue-400 rounded-lg"
        placeholder={"What is your " + placeholder.toLowerCase() + "?"}
        value={talker[field]}
        onChange={set}
      />
    </div>
  ) : (
    <div className="flex flex-col col-span-2">
      <div class="font-semibold">{placeholder}</div>
      <textarea
        className="w-full px-4 py-2 border-2 border-blue-400 rounded-lg h-44 overflow-ellipsis"
        cols="40"
        rows="5"
        placeholder={"What is your " + placeholder.toLowerCase() + "?"}
        value={talker[field]}
        onChange={set}
      />
    </div>
  );
};

const Contact = () => {
  const [talker, setTalker] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const fields = ["First Name", "Last Name", "E-mail", "Phone", "Message"];
  return (
    <div className="absolute w-screen h-[100vh-20] mx-auto overflow-x-hidden">
      <Head />
      <Navbar />
      <NavbarMobile />
      <div className="bottom-0 flex flex-row w-screen md:h-screen h-1/2 lg:text-base md:text-2xl text-4xl pb-20">
        <div className="flex flex-col justify-center w-1/3 bg-blue-400">
          <div className="flex flex-col justify-around gap-4 p-4 my-auto bg-blue-400 h-2/3">
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              navigation={true}
              className="w-full text-white font-bold"
            >
              <SwiperSlide className="content-center">
                <div className="flex flex-col w-5/6">
                  <div className="flex flex-row justify-around text-white pb-20">
                    <Phone className="grid place-items-center" />

                    <p className="w-2/3 text-left">{"(+91)-9871722954"}</p>
                  </div>
                  <div className="flex flex-row justify-around text-white">
                    <Location />
                    <p className="w-2/3 font-semibold">
                      <ul>CORPORATE OFFICE</ul>
                      <br></br>
                      C-16, SECTOR 6, NOIDA 201301 <br></br>
                      DISTT. GAUTAM BUDDHA NAGAR UTTAR PRADESH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="content-center">
                <div className="flex flex-col w-5/6">
                  <div className="flex flex-row justify-around text-white pb-20">
                    <Phone className="grid place-items-center" />

                    <p className="w-2/3 text-left">{"(+91)-9871722954"}</p>
                  </div>
                  <div className="flex flex-row justify-around text-white">
                    <Location />
                    <p className="w-2/3 font-semibold">
                      <ul>UNIT-1</ul>
                      <br></br>
                      B-09, SECTOR 85, NOIDA-201305<br></br>
                      DISTT. GAUTAM BUDDHA NAGAR UTTAR PRADESH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="content-center">
                <div className="flex flex-col w-5/6">
                  <div className="flex flex-row justify-around text-white pb-20">
                    <Phone className="grid place-items-center" />

                    <p className="w-2/3 text-left">{"(+91)-9871722954"}</p>
                  </div>
                  <div className="flex flex-row justify-around text-white">
                    <Location />
                    <p className="w-2/3 font-semibold">
                      <ul>UNIT-2</ul>
                      <br></br>
                      A-02, SECTOR 87, NOIDA-201305<br></br>
                      DISTT. GAUTAM BUDDHA NAGAR UTTAR PRADESH
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="content-center">
                <div className="flex flex-col w-5/6">
                  <div className="flex flex-row justify-around text-white pb-20">
                    <Phone className="grid place-items-center" />

                    <p className="w-2/3 text-left">{"(+91)-9871722954"}</p>
                  </div>
                  <div className="flex flex-row justify-around text-white">
                    <Location />
                    <p className="w-2/3 font-semibold">
                      <ul>UNIT-4</ul>
                      <br></br>
                      PLOT NO. 181, INDUSTRIAL PARK, <br></br>
                      TUNIKI BOLLARAM, HYDERABAD, TELANGANA (502279)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Social />
          </div>
        </div>
        <div className="grid w-2/3 h-full px-24 place-items-center">
          <div className="grid w-full grid-cols-2 gap-12 h-1/3">
            {Object.keys(talker).map((field, index) => (
              <Input
                key={index}
                field={field}
                placeholder={fields[index]}
                talker={talker}
                setTalker={setTalker}
              />
            ))}
          </div>
          <div className="px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-400 border-2 border-blue-500 rounded-lg cursor-pointer hover:bg-white hover:text-blue-500 h-min w-min">
            Submit
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
