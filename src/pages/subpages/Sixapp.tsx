import { AiOutlineAppstore } from "react-icons/ai";
import logo from "./images/fon.jpg";
import hotelBookings from "./images/hotel-bookings.png";
import hotelCabins from "./images/hotel-cabins.png";
import hotelCheckin from "./images/hotel-checkin.png";
import hotelCreate from "./images/hotel-createcabin.png";
import hotelDark from "./images/hotel-dark.png";
import hotelDetails from "./images/hotel-detailsbookings.png";
import hotelHome from "./images/hotel-home.png";
import hotelStat from "./images/hotel-stat.png";
import hotelLogin from "./images/hotel-login.png";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaGithub, FaLink } from "react-icons/fa";

function Sixapp() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // useEffect to observe content fading in on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const contentElements = contentRef.current?.querySelectorAll(".fade-in");
    contentElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      contentElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 text-white">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-4 py-6 md:px-12 lg:px-24 xl:px-32">
        <div className="flex items-center">
          <AiOutlineAppstore size={30} className="text-red-500" />
          <span className="ml-2 text-3xl font-medium">A Hotel guests App</span>
        </div>
        <img src={logo} alt="logo" className="rounded-full w-16 h-16" />
      </header>

      {/* Main content */}
      <div className="flex-1 mt-8 px-4 py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            #5 Hotel App.
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            This app helps hotel staff to monitor guests in the hotel since it provides useful tools. There are charts and statistics for regulating guests income and outcome.
            A fully complex design with solid{" "}
            <b className="text-red-500">React Js using React query, Styled components and etc</b>
          </p>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="w-[800px] mb-3 rounded-lg shadow-md"
          >
            <SwiperSlide>
              <img
                src={hotelHome}
                alt="film"

              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hotelBookings}
                alt="film"

              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hotelCabins}
                alt="film"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hotelCreate}
                alt="film"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hotelDark}
                alt="film"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hotelDetails}
                alt="film"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hotelLogin}
                alt="film"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hotelStat}
                alt="film"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={hotelCheckin}
                alt="film"
              />
            </SwiperSlide>
          </Swiper>
          <a href="https://hotel-regapp.netlify.app/dashboard" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-400 hover:underline hover:underline-offset-4">Try this app on your own with this link <FaLink /></a>
          <br />
          <p className="text-lg text-gray-800 mb-6">
            I made this app with the help of YouTube teachers and GPT. It has lots of functionalities as you can see by clicking on the link below.<u>Just to remind, I started studying programming from zero in 2024 in January, so within 3 months I managed to make such app🤩</u>. From this project, I strenghtened skills at <b>React query library, styled-components, recharts and much more</b>!
          </p>

          <a
            href="https://github.com/abrorrr15/hotelapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 cursor-pointer text-red-600 hover:underline hover:underline-offset-4"
          >
            You can check out code via <span><FaGithub size={25} className="text-black" /></span>
          </a>

        </div>
      </div>

      {/* Back button */}
      <button
        className="absolute top-4 right-4 px-4 py-2 text-lg bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-200 duration-300 font-mono"
        onClick={() => navigate(-1)}
      >
        &larr; BACK
      </button>
    </div>
  );
}

export default Sixapp;
