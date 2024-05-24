import { AiOutlineAppstore } from "react-icons/ai";
import logo from "./images/fon.jpg";
import atomicDayIntro from "./images/atomic-dayintro.png";
import atomicNightInto from "./images/atomic-nightintro.png";
import atomicSearch from "./images/atomic-search.png";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaGithub, FaLink } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Thirdapp() {
  const { t } = useTranslation();
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
          <span className="ml-2 text-3xl font-medium">{t("headerTitle3")}</span>
        </div>
        <img src={logo} alt="logo" className="rounded-full w-16 h-16" />
      </header>

      {/* Main content */}
      <div className="flex-1 mt-8 px-4 py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            {t("blogAppNumber3")}
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            {t("description3")} <b className="text-red-500">{t("reactJs")}</b>
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
              <img src={atomicDayIntro} alt="film" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={atomicNightInto} alt="film" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={atomicSearch} alt="film" />
            </SwiperSlide>
          </Swiper>
          <a
            href="https://abror-blog.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-blue-400 hover:underline hover:underline-offset-4"
          >
            {t("tryAppLink")} <FaLink />
          </a>
          <br />
          <p className="text-lg text-gray-800 mb-6">
            {t("discoverProject")} <b>Redux library, Tailwind and {t("much more")}</b>!
          </p>

          <a
            href="https://github.com/abrorrr15/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 cursor-pointer text-red-600 hover:underline hover:underline-offset-4"
          >
            {t("githubLinkText")}{" "}
            <span>
              <FaGithub size={25} className="text-black" />
            </span>
          </a>
        </div>
      </div>

      {/* Back button */}
      <button
        className="absolute top-4 right-4 px-4 py-2 text-lg bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-200 duration-300 font-mono"
        onClick={() => navigate(-1)}
      >
        {t("backButtonText")}
      </button>
    </div>
  );
}

export default Thirdapp;
