import { AiOutlineAppstore } from "react-icons/ai";
import logo from "./images/fon.jpg";
import worldwiseIntro from "./images/worldwise-intro.png";
import worldwiseForm from "./images/worldwise-form.png";
import worldwiseAbout from "./images/worldwise-about.png";
import worldwiseMap from "./images/worldwise-map.png";
import worldwisePricing from "./images/worldwise-pricing.png";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaGithub, FaLink } from "react-icons/fa";

function Fifthapp() {
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
          <span className="ml-2 text-3xl font-medium">A Note App</span>
        </div>
        <img src={logo} alt="logo" className="rounded-full w-16 h-16" />
      </header>

      {/* Main content */}
      <div className="flex-1 mt-8 px-4 py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            #5 Note App.
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            This app is like a note tool where you can set time and city you visited and rate it or comment. There is even a GPS for defining your current position.
            A complete design with solid{" "}
            <b className="text-red-500">React Js using React query, Styled components and etc</b>
          </p>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-[800px] mb-3 rounded-lg shadow-md"
          >
            <SwiperSlide>
              <img
                src={worldwiseIntro}
                alt="film"

              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={worldwiseAbout}
                alt="film"

              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={worldwiseForm}
                alt="film"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={worldwiseMap}
                alt="film"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={worldwisePricing}
                alt="film"
              />
            </SwiperSlide>
          </Swiper>
          <a href="https://worldwise-projects.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-400 hover:underline hover:underline-offset-4">Try this app on your own with this link <FaLink /></a>
          <br />
          <p className="text-lg text-gray-800 mb-6">
            So, it was the next one of complicated project which took more than a two weeks to complete. Of course, <u>I admit it was not my idea of the project since I did this following YouTube video</u>. From this project, I discovered <b>React query library, styled-components and much more</b>!
          </p>

          <a
            href="https://github.com/abrorrr15/worldproject"
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

export default Fifthapp;
