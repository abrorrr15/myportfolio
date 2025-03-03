import { useEffect, useRef, useState } from "react";
import { PiSuitcaseSimple } from "react-icons/pi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  FaCss3,
  FaExternalLinkAlt,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import {
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import { FaLaravel } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Works() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

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
  function handleToggle(value: string | null) {
    setIsOpen((q: string | null) => (q === value ? null : value));
  }

  return (
    <div
      className="min-h-screen overflow-y-auto custom-scrollbar"
      ref={contentRef}
    >
      <header className="flex items-center justify-between text-white fade-in">
        <div className="flex items-center m-[2em] mb-[1em] xl:mb-[1.3em] xl:m-[1.5em] 2xl:m-[1em] 2xl:mb-[1.5em] text-xl md:text-3xl font-medium text-white fade-in">
          <PiSuitcaseSimple size={35} />
          <span className="ml-2">{t("Projects / Portfolio")}</span>
        </div>
        <Logo />
      </header>
      <br />
      <div className="grid grid-cols-5 md:flex items-center mx-2 mb-10 justify-around gap-2 bg-[#ffffff6c] shadow-lg">
        <a
          href="https://ru.wikipedia.org/wiki/HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHtml5
            size={40}
            className="text-red-500 hover:text-red-300 duration-300"
          />
        </a>
        <a
          href="https://ru.wikipedia.org/wiki/CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCss3
            size={40}
            className="text-blue-600 hover:text-blue-400 duration-300"
          />
        </a>
        <a
          href="https://ru.wikipedia.org/wiki/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaJs
            size={40}
            className="text-yellow-400 hover:text-yellow-200 duration-300"
          />
        </a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <FaReact
            size={40}
            className="text-[#0088ff] hover:text-[#0088ff4e] duration-300"
          />
        </a>
        <a
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiRedux
            size={40}
            className="text-[#800060] hover:text-[#8000605b] duration-300"
          />
        </a>
        <a
          href="https://tanstack.com/query/v3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiReactquery
            size={40}
            className="text-[#ff4444] hover:text-[#f48787] duration-300"
          />
        </a>
        <a
          href="https://supabase.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiSupabaseFill
            size={40}
            className="text-[green] hover:text-green-200 duration-300"
          />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTypescript
            size={40}
            className="text-[#002fff] hover:text-blue-500 duration-300"
          />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTailwindCssFill
            size={40}
            className="text-[#007180] hover:text-[#00718067] duration-300"
          />
        </a>
        <a
          href="https://www.styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiStyledcomponents
            size={45}
            className="text-[#db7093] hover:text-[#f2b2c8] duration-300"
          />
        </a>
        <a
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaSass
            size={40}
            className="text-pink-500 hover:text-pink-300 duration-300"
          />
        </a>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-subgrid gap-5 rounded-lg shadow-lg w-full">
        <div className="fade-in">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
            onClick={() => handleToggle("3")}
          >
            <SwiperSlide>
              <div>
                <img
                  src="atomic-dayintro.png"
                  alt="#2"
                  className="m-3 w-full relative"
                />
                <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                  <Link to="https://abror-blog.netlify.app/">
                    <FaExternalLinkAlt
                      className="mx-auto my-auto hover:text-[skyblue] duration-300"
                      size={40}
                    />
                  </Link>
                </span>
              </div>

              <p className="swiper-slide-title ml-3">Atomic Blog</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="atomic-search.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://abror-blog.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Search blogs</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="atomic-nightintro.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://abror-blog.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Dark Mode</p>
            </SwiperSlide>
            <br />

            <div
              style={{
                opacity: `${isOpen === "3" ? "1" : "0"}`,
                transition: "all .5s",
              }}
              className="bg-[#ffffff80] text-gray-800 bg-opacity-90 p-2 rounded-lg shadow-md ml-3"
              onClick={() => handleToggle("3")}
            >
              <p className="font-bold text-center mb-2">
                {t("Languages & Techs used")}:
              </p>
              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <FaHtml5 className="text-red-500 mr-1" size={20} />
                  <span className="mr-2">HTML</span>
                </div>
                <div className="flex items-center">
                  <FaCss3 className="text-blue-600 mr-1" size={20} />
                  <span className="mr-2">CSS</span>
                </div>
                <div className="flex items-center">
                  <FaJs className="text-yellow-400 mr-1" size={20} />
                  <span className="mr-2">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <FaReact className="text-[#0088ff] mr-1" size={20} />
                  <span className="mr-2">React js</span>
                </div>
                <div className="flex items-center">
                  <SiStyledcomponents
                    className="text-[#db7093] mr-1"
                    size={30}
                  />
                  <span className="mr-2">Styled-components</span>
                </div>
                <div className="flex items-center">
                  <SiRedux className="text-[#800060] mr-1" size={20} />
                  <span className="mr-2">Redux</span>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        <div className="fade-in">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
            onClick={() => handleToggle("4")}
          >
            <SwiperSlide>
              <img
                src="hangman.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://abror-hangman.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Hangman Game</p>
            </SwiperSlide>
            <br />

            <div
              style={{
                opacity: `${isOpen === "4" ? "1" : "0"}`,
                transition: "all .5s",
              }}
              className="bg-[#ffffff80] text-gray-800 bg-opacity-90 p-2 rounded-lg shadow-md ml-3"
              onClick={() => handleToggle("4")}
            >
              <p className="font-bold text-center mb-2">
                {t("Languages & Techs used")}:
              </p>
              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <FaHtml5 className="text-red-500 mr-1" size={20} />
                  <span className="mr-2">HTML</span>
                </div>
                <div className="flex items-center">
                  <FaCss3 className="text-blue-600 mr-1" size={20} />
                  <span className="mr-2">CSS</span>
                </div>
                <div className="flex items-center">
                  <FaJs className="text-yellow-400 mr-1" size={20} />
                  <span className="mr-2">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <SiTypescript className="text-[#002fff] mr-1" size={20} />
                  <span className="mr-2">TypeScript</span>
                </div>
              </div>
            </div>
          </Swiper>
        </div>

        <div className="fade-in">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
            onClick={() => handleToggle("5")}
          >
            <SwiperSlide>
              <img
                src="worldwise-intro.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://worldwise-projects.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">World Wise app</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="worldwise-form.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://worldwise-projects.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Security</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="worldwise-about.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://worldwise-projects.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Info about</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="worldwise-map.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://worldwise-projects.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Map</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="worldwise-pricing.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                {" "}
                <Link to="https://worldwise-projects.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Prices</p>
            </SwiperSlide>
            <br />
            <div
              style={{
                opacity: `${isOpen === "5" ? "1" : "0"}`,
                transition: "all .5s",
              }}
              className="bg-[#ffffff80] text-gray-800 bg-opacity-90 p-2 rounded-lg shadow-md ml-3"
              onClick={() => handleToggle("5")}
            >
              <p className="font-bold text-center mb-2">
                {" "}
                {t("Languages & Techs used")}:
              </p>
              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <FaHtml5 className="text-red-500 mr-1" size={20} />
                  <span className="mr-2">HTML</span>
                </div>
                <div className="flex items-center">
                  <FaCss3 className="text-blue-600 mr-1" size={20} />
                  <span className="mr-2">CSS</span>
                </div>
                <div className="flex items-center">
                  <FaJs className="text-yellow-400 mr-1" size={20} />
                  <span className="mr-2">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <FaReact className="text-[#0088ff] mr-1" size={20} />
                  <span className="mr-2">React js</span>
                </div>
                <div className="flex items-center">
                  <RiTailwindCssFill
                    className="text-[#007180] mr-1"
                    size={20}
                  />
                  <span className="mr-2">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <SiRedux className="text-[#800060] mr-1" size={20} />
                  <span className="mr-2">Redux</span>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        <div className="fade-in">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
            onClick={() => handleToggle("6")}
          >
            <SwiperSlide>
              <img
                src="hotel-home.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />{" "}
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Hotel guests app</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="hotel-login.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Security</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="hotel-bookings.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Bookings</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="hotel-cabins.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Cabins</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="hotel-dark.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Dark mode</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="hotel-stat.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Charts</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="hotel-user.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Create user</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="hotel-createcabin.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">
                Create cabins / bookings
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="hotel-checkin.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Checkin</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="hotel-detailsbookings.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm">
                <Link to="https://hotel-guests-app.netlify.app/">
                  <FaExternalLinkAlt
                    className="mx-auto my-auto hover:text-[skyblue] duration-300"
                    size={40}
                  />
                </Link>
              </span>
              <p className="swiper-slide-title ml-3">Details</p>
            </SwiperSlide>
            <br />
            <div
              style={{
                opacity: `${isOpen === "6" ? "1" : "0"}`,
                transition: "all .5s",
              }}
              className="bg-[#ffffff80] text-gray-800 bg-opacity-90 p-2 rounded-lg shadow-md ml-3"
              onClick={() => handleToggle("6")}
            >
              <p className="font-bold text-center mb-2">
                {t("Languages & Techs used")}:
              </p>
              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <FaHtml5 className="text-red-500 mr-1" size={20} />
                  <span className="mr-2">HTML</span>
                </div>
                <div className="flex items-center">
                  <FaCss3 className="text-blue-600 mr-1" size={20} />
                  <span className="mr-2">CSS</span>
                </div>
                <div className="flex items-center">
                  <FaJs className="text-yellow-400 mr-1" size={20} />
                  <span className="mr-2">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <FaReact className="text-[#0088ff] mr-1" size={20} />
                  <span className="mr-2">React js</span>
                </div>
                <div className="flex items-center">
                  <SiStyledcomponents
                    className="text-[#db7093] mr-1"
                    size={30}
                  />
                  <span className="mr-2">Styled-components</span>
                </div>
                <div className="flex items-center">
                  <SiRedux className="text-[#ff4444] mr-1" size={20} />
                  <span className="mr-2">React query</span>
                </div>
                <div className="flex items-center col-span-2">
                  <RiSupabaseFill className="text-[green] mr-1" size={20} />
                  <span className="mr-2">Supabase (back-end)</span>
                </div>
              </div>
            </div>
          </Swiper>
        </div>

        <div className="fade-in">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
            onClick={() => handleToggle("7")}
          >
            <SwiperSlide>
              <img
                src="real-project.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm"></span>
              <p className="swiper-slide-title ml-3">
                Docs project for ETC company
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="etc-main.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm"></span>
              <p className="swiper-slide-title ml-3">Docs table</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="etc-example.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm"></span>
              <p className="swiper-slide-title ml-3">Document</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="etc-stat.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm"></span>
              <p className="swiper-slide-title ml-3">Charts</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="etc-details.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <span className=" text-blue-600 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-3 w-full h-[10rem] duration-300 opacity-0 hover:opacity-[1] hover:backdrop-blur-sm"></span>
              <p className="swiper-slide-title ml-3">Details</p>
            </SwiperSlide>
            <br />
            <div
              style={{
                opacity: `${isOpen === "7" ? "1" : "0"}`,
                transition: "all .5s",
              }}
              className="bg-[#ffffff80] text-gray-800 bg-opacity-90 p-2 rounded-lg shadow-md ml-3"
              onClick={() => handleToggle("7")}
            >
              <p className="font-bold text-center mb-2">
                {t("Languages & Techs used")}:
              </p>
              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <FaHtml5 className="text-red-500 mr-1" size={20} />
                  <span className="mr-2">HTML</span>
                </div>
                <div className="flex items-center">
                  <FaCss3 className="text-blue-600 mr-1" size={20} />
                  <span className="mr-2">CSS</span>
                </div>
                <div className="flex items-center">
                  <FaJs className="text-yellow-400 mr-1" size={20} />
                  <span className="mr-2">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <FaPhp className="text-purple-600 mr-1" size={20} />
                  <span className="mr-2">PHP</span>
                </div>
                <div className="flex items-center">
                  <SiTypescript className="text-[#002fff] mr-1" size={20} />
                  <span className="mr-2">React TS</span>
                </div>
                <div className="flex items-center">
                  <SiRedux className="text-[#ff4444] mr-1" size={20} />
                  <span className="mr-2">React query</span>
                </div>
                <div className="flex items-center">
                  <RiTailwindCssFill
                    className="text-[#007180] mr-1"
                    size={20}
                  />
                  <span className="mr-2">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <FaLaravel
                    className="bg-white text-red-500 rounded-[50%] mr-1"
                    size={20}
                  />
                  <span className="mr-2">Laravel</span>
                </div>
              </div>
            </div>
          </Swiper>
        </div>

        <div className="fade-in">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[100%]"
            onClick={() => handleToggle("9")}
          >
            <SwiperSlide>
              <img
                src="react_next.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />

              <p className="swiper-slide-title flex justify-center items-center flex-row gap-2 m-3">
                <HiClock />
                <span>Soon</span>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="react_next.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />

              <p className="swiper-slide-title flex justify-center items-center flex-row gap-2 m-3">
                <HiClock />
                <span>Soon</span>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="react_next.png"
                alt="#2"
                className="m-3 w-full"
                loading="lazy"
              />
              <p className="swiper-slide-title flex justify-center items-center flex-row gap-2 m-3">
                <HiClock />
                <span>Soon</span>
              </p>
            </SwiperSlide>
            <br />
            <div
              style={{
                opacity: `${isOpen === "9" ? "1" : "0"}`,
                transition: "all .5s",
              }}
              className="bg-[#ffffff80] text-gray-800 bg-opacity-90 p-2 rounded-lg shadow-md ml-3"
              onClick={() => handleToggle("9")}
            >
              <p className="font-bold text-center mb-2">
                Languages & Techs used:
              </p>
              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <FaHtml5 className="text-red-500 mr-1" size={20} />
                  <span className="mr-2">HTML</span>
                </div>
                <div className="flex items-center">
                  <FaCss3 className="text-blue-600 mr-1" size={20} />
                  <span className="mr-2">CSS</span>
                </div>
                <div className="flex items-center">
                  <FaJs className="text-yellow-400 mr-1" size={20} />
                  <span className="mr-2">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <FaPhp className="text-purple-600 mr-1" size={20} />
                  <span className="mr-2">PHP</span>
                </div>
                <div className="flex items-center">
                  <SiTypescript className="text-[#002fff] mr-1" size={20} />
                  <span className="mr-2">React TS</span>
                </div>
                <div className="flex items-center">
                  <SiRedux className="text-[#ff4444] mr-1" size={20} />
                  <span className="mr-2">React query</span>
                </div>
                <div className="flex items-center">
                  <RiTailwindCssFill
                    className="text-[#007180] mr-1"
                    size={20}
                  />
                  <span className="mr-2">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <FaLaravel
                    className="bg-white text-red-500 rounded-[50%] mr-1"
                    size={20}
                  />
                  <span className="mr-2">Laravel</span>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </main>
      <footer className="mt-5">
        <div>
          <hr />
        </div>
      </footer>
    </div>
  );
}

export default Works;
