import { AiOutlineAppstore } from "react-icons/ai";
import logo from "./images/fon.jpg";
import etc from "./images/etc.jpg";
import etcMain from "./images/etc-main.png";
import etcExample from "./images/etc-example.png";
import etcDetails from "./images/etc-details.png";
import etcStat from "./images/etc-stat.png";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

function Sevenapp() {
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
          <span className="ml-2 text-3xl font-medium">
            {t("A Data base App")}
          </span>
        </div>
        <img src={logo} alt="logo" className="rounded-full w-16 h-16" />
      </header>

      {/* Main content */}
      <div className="flex-1 mt-8 px-4 py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            {t("#7 Docs data-base App")}.
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            {t(
              "This app helps organise docs more properly and there is a math set inside this App, so you will not need a calculator. Moreover, the app provides search and filter tools to facilitate your job. A fully complex design with solid"
            )}{" "}
            <b className="text-red-500">
              {t("React TS using React query, Recharts js, Tailwind and etc")}
            </b>
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
            className="w-[800px] mb-3 rounded-lg shadow-md border"
          >
            <SwiperSlide>
              <img src={etc} alt="film" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={etcMain} alt="film" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={etcDetails} alt="film" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={etcExample} alt="film" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={etcStat} alt="film" />
            </SwiperSlide>
          </Swiper>

          <br />
          <p className="text-lg text-gray-800 mb-6">
            {t(" From that time I had been hired to the company ")}etc.uz.{" "}
            <u>
              {t(
                "Just to remind, I started studying programming from zero in 2024 in January, so within 3 months I managed to make such app"
              )}
              🤩
            </u>
            . {t("From this project, I strenghtened skills at")}{" "}
            <b>
              React query library, styled-components, recharts and{" "}
              {t("much more")}
            </b>
            !
          </p>

          <p className="flex items-center gap-3 cursor-pointer text-red-600 hover:underline hover:underline-offset-4">
            {t("Only after Abror's permission you can access to this app!")}
          </p>
        </div>
      </div>

      {/* Back button */}
      <button
        className="absolute top-4 right-4 px-4 py-2 text-lg bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-200 duration-300 font-mono"
        onClick={() => navigate(-1)}
      >
        &larr; {t("backButton")}
      </button>
    </div>
  );
}

export default Sevenapp;
