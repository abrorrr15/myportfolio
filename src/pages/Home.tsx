import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
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
      className="flex flex-col justify-center overflow-scroll custom-scrollbar h-screen pl-5 md:pl-20 select-none"
      ref={contentRef}
    >
      <p className="font-medium text-xl md:text-3xl xl:text-6xl mb-2 text-green-500 fade-in">
        {t("Hi, my name is")}
      </p>
      <p className="w-[6ch] md:w-[10ch] 2xl:w-[14ch] font-mono overflow-hidden text-3xl md:text-7xl font-bold mb-4 text-gray-100 border-r-4 border-black whitespace-nowrap animate-typing fade-in">
        {t("AbrorXoliqov")}.<span className="animate-blink">|</span>
      </p>
      <p className="text-lg md:text-2xl 2xl:text-5xl mb-4 text-gray-300 fade-in">
        {t("I build full-stack applications.")}
      </p>
      <p className="text-sm md:text-xl mb-4 max-w-4xl text-green-200 fade-in">
        {t("I am a Full-stack developer specializing in building websites for your business. Currently, I am looking for opportunities in this field!")}
      </p>
      <p className="font-bol d fade-in text-gray-300">
        {t("If you are interested in my works,")}{" "}
        <span
          className="text-red-600 text-lg md:text-2xl cursor-pointer font-normal"
          onClick={() => navigate("/about")}
        >
          <u>{t("let's start!")}</u>
        </span>
      </p>
    </div>
  );
}

export default Home;
