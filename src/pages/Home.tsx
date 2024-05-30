import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
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

  return (
    <div
      className="flex flex-col justify-center overflow-scroll custom-scrollbar h-screen pl-20 select-none"
      ref={contentRef}
    >
      <p className="font-medium text-6xl mb-2 text-green-500 fade-in">
        {t("Hi, my name is")}
      </p>
      <p className="w-[14ch] font-mono overflow-hidden text-7xl font-bold mb-4 text-gray-100 border-r-4 border-black whitespace-nowrap animate-typing fade-in">
        {t("AbrorXoliqov")}.<span className="animate-blink">|</span>
      </p>
      <p className="text-5xl mb-4 text-gray-300 fade-in">
        {t("I build client-side servers.")}
      </p>
      <p className="text-xl mb-4 max-w-4xl text-green-200 fade-in">
        {t("I am a Front-end developer specializing in building client-side websites with logic. Currently, I am looking for opportunities in this field!")}
      </p>
      <p className="font-bold fade-in text-gray-300">
        {t("If you are interested in my works,")}{" "}
        <span
          className="text-red-600 text-2xl cursor-pointer font-normal"
          onClick={() => navigate("/about")}
        >
          <u>{t("let's start!")}</u>
        </span>
      </p>
    </div>
  );
}

export default Home;
