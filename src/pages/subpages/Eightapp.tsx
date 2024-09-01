import { AiOutlineAppstore } from "react-icons/ai";
import logo from "./images/fon.jpg";
import portfolioHome from "./images/portfolio-home.png";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Eightapp() {
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
            {t("Portfolio App")}{" "}
          </span>
        </div>
        <img src={logo} alt="logo" className="rounded-full w-16 h-16" />
      </header>

      {/* Main content */}
      <div className="flex-1 mt-8 px-4 py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            {t("#8 Portfolio App")}.
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            {t(
              "This app totally done by Abror. It used the most recent tools & libraries. Moreover, the app has an access to back-end via Supabase (PostgreSQL). A fully complex design with solid"
            )}{" "}
            <b className="text-red-500">
              {t("React TS using React query, Swiper, Tailwind and etc")}
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
              <img src={portfolioHome} alt="film" />
            </SwiperSlide>
          </Swiper>

          <br />
          <p className="text-lg text-gray-800 mb-6">
            {t(
              "I need a job which is connected with full-stack development. So,I created my first portfolio website, I hope you liked it. I can understand if it seems too simple or with bags (if you notice any, you can leave a message in contact form). From this project, I strenghtened skills at"
            )}{" "}
            <b>
              React query library, styled-components, recharts and {t("much more")}
            </b>
            !
          </p>

          <Link
            to="/contact"
            className="flex items-center gap-3 cursor-pointer text-red-600 hover:underline hover:underline-offset-4"
          >
            {t("Only after Abror's permission you can access to this app!")}
          </Link>
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

export default Eightapp;
