import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";

import {
  SiCodesandbox,
  SiNetlify,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";

import { useEffect, useRef } from "react";
import { PiStudentFill } from "react-icons/pi";
import { VscTerminal } from "react-icons/vsc";
import Logo from "../components/Logo";
import { IoIosSchool } from "react-icons/io";
import { MdInfoOutline, MdWork } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();
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
      className="min-h-screen overflow-y-auto custom-scrollbar"
      ref={contentRef}
    >
      <header className="flex items-center justify-between  font-medium text-white fade-in">
        <div className="flex items-center  m-[2em] mb-[1em] xl:mb-[1.3em] xl:m-[1.5em] 2xl:m-[1em] 2xl:mb-[1.5em] text-3xl font-medium text-white fade-in">
          <PiStudentFill size={35} />
          <span className="ml-2">{t("Education / Experience")}</span>
        </div>
        <Logo />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 ml-3 md:px-32 text-start bg-[#ffffff9f] rounded-lg shadow-lg fade-in">
        <section className="mr-2">
          <h1 className="text-4xl font-bold mb-8 flex gap-2 items-center">
            <IoIosSchool />
            {t("Education")}
          </h1>
          <div className="space-y-5">
            <div>
              <label className="block font-semibold text-xl mb-1">
                2012-2023:
              </label>
              <input
                type="text"
                value={t("School №1")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-lg"
              />
            </div>
            <hr className="border-gray-800" />
            <div>
              <label className="block font-semibold text-xl mb-1">
                2022-2023:
              </label>
              <input
                type="text"
                value={t("English")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-lg"
              />
            </div>
            <hr className="border-gray-800" />
            <div>
              <label className="block font-semibold text-xl mb-1">
                2023-{t("continuing")}:
              </label>
              <input
                type="text"
                value={t("National University of Uzbekistan Tashkent")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-lg"
              />
            </div>
            <hr className="border-gray-800" />
            <div>
              <label className="block font-semibold text-xl mb-1">
                12.01.2024-{t("continuing")}:
              </label>
              <input
                type="text"
                value={t("Programming / Software Engineering at home")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-lg"
              />
            </div>
          </div>
          <br />
        </section>

        <section>
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
            <MdWork />
            {t("Experience")}
          </h1>
          <div className="space-y-5">
            <div>
              <label className="block font-semibold text-xl mb-1">
                26.04.2024-{t("continuing")}:
              </label>
              <input
                type="text"
                value={t("Job at etc.uz (IST Telekom)")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-lg"
              />
            </div>
            <hr className="border-gray-800" />
            <div>
              <label className="block font-semibold text-xl mb-1">
                2024-{t("continuing")}:
              </label>
              <input
                type="text"
                value={t("Working on PET-projects")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="px-8 md:px-32 mt-12 text-start fade-in">
        <h1 className="text-4xl font-bold mb-8">{t("skills")}</h1>
        <div className="space-y-5">
          <div>
            <label className="block font-semibold text-xl mb-1">
              {t("Programming Languages:")}
            </label>
            <div className="flex gap-10 mt-5">
              <FaHtml5 size={50} className="text-red-500" />
              <FaCss3 size={50} className="text-blue-600" />
              <FaJs size={50} className="text-yellow-400" />
            </div>
          </div>
          <hr className="border-gray-800" />
          <div>
            <label className="block font-semibold text-xl mb-1">
              {t("Frameworks & Libraries:")}
            </label>
            <div className="flex gap-10 mt-5">
              <FaReact
                size={50}
                className="bg-[#ffffff99] rounded-[50%] text-[#0088ff]"
              />
              <SiRedux size={50} className="text-[#800060]" />
              <SiReactquery size={50} className="text-[#ff4444]" />
              <SiTypescript
                size={50}
                className="bg-white rounded-[10px] text-[#002fff]"
              />
              <SiStyledcomponents size={50} className="text-[#db7093]" />
              <RiTailwindCssFill size={50} className="text-[#38bdf8]" />
              <FaSass size={50} className="text-pink-500" />
            </div>
          </div>
          <hr className="border-gray-800" />
          <div>
            <label className="block font-semibold text-xl mb-1">
              {t("Tools & Platforms:")}
            </label>
            <div className="flex gap-10 mt-5">
              <FaGithub size={50} className="bg-white rounded-[50%]" />
              <RiSupabaseFill size={50} className="text-[green]" />
              <SiNetlify size={50} className="text-[#00FFFF]" />
              <SiCodesandbox size={50} className="bg-gray-200" />
              <VscTerminal size={50} className="bg-gray-200 rounded-[10px]" />
            </div>
          </div>
          <hr className="border-gray-800" />
          <div>
            <label className="flex items-center gap-1 font-semibold text-xl mb-1">
              <MdInfoOutline />
              {t("Other Skills:")}
            </label>
            <p className="w-full bg-zinc-400 text-white border-none rounded-[5px] p-2 text-lg">
              <b className="text-green-500">{t("English C1")}</b>, {t("Problem-solving, Team collaboration, Friendly, Polite, Tolerable, Cognitive thinking, Thankful and etc.")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-32 mt-12 text-start fade-in">
        <h1 className="text-4xl font-bold mb-8">
          {t("Currently Learning / Planning to Learn")}
        </h1>
        <div className="space-y-5">
          <div>
            <label className="block font-semibold text-xl mb-1">
              {t("Current Learning:")}
            </label>
            <div className="flex gap-10 mt-5">
              <FaNodeJs size={50} className="text-green-600" />
            </div>
          </div>
          <hr className="border-gray-800" />
          <div>
            <label className="block font-semibold text-xl mb-1">
              {t("Planning to Learn:")}
            </label>
            <div className="flex gap-10 mt-5">
              <RiNextjsFill size={50} className="text-black" />
              <FaVuejs size={50} className="text-green-500" />
            </div>
          </div>
          <br />
        </div>
        <br />
      </section>
    </div>
  );
}

export default Experience;
