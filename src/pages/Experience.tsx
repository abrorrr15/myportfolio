import {
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
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

import { useRef } from "react";
import { PiStudentFill } from "react-icons/pi";
import Logo from "../components/Logo";
import { IoIosSchool } from "react-icons/io";
import { MdInfoOutline, MdWork } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGitlab } from "react-icons/fa6";
import { HiDeviceMobile } from "react-icons/hi";
import { DiRedis } from "react-icons/di";
import { FcDataSheet, FcLinux } from "react-icons/fc";

function Experience() {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="min-h-screen overflow-y-auto custom-scrollbar"
      ref={contentRef}
    >
      <header className="flex items-center justify-between  font-medium text-white">
        <div className="flex items-center  m-[2em] mb-[1em] xl:mb-[1.3em] xl:m-[1.5em] 2xl:m-[1em] 2xl:mb-[1.5em] text-lg md:text-3xl font-medium text-white ">
          <PiStudentFill size={35} />
          <span className="md:ml-2">{t("Education / Experience")}</span>
        </div>
        <Logo />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 mx-1 md:px-32 text-start bg-[#ffffff9f] rounded-lg shadow-lg">
        <section className="mr-2">
          <h1 className="text-xl md:text-4xl font-bold mb-8 flex gap-2 items-center">
            <IoIosSchool />
            {t("Education")}
          </h1>
          <div className="space-y-5">
            <div>
              <label className="block font-semibold text-lg md:text-xl mb-1">
                2012-2023:
              </label>
              <input
                type="text"
                value={t("School №1")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-sm md:text-lg"
              />
            </div>
            <hr className="border-gray-800" />
            <div>
              <label className="block font-semibold text-xl mb-1">
                2022-2023:
              </label>
              <input
                type="text"
                value={t("English") + " (IELTS 6.5)"}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-sm md:text-lg overflow-x-auto"
              />
            </div>
            <hr className="border-gray-800" />
            <div>
              <label className="block font-semibold text-xl mb-1">
                2023-{t("continuing")}:
              </label>
              <input
                type="text"
                value={t("National University of Uzbekistan (TashGu)")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-sm md:text-lg"
              />
            </div>
            <hr className="border-gray-800" />
            <div>
              <label className="block font-semibold text-xl mb-1">
                12.01.2024-{t("continuing")}:
              </label>
              <input
                type="text"
                value={t("Programming / Software Engineering in solo")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-sm md:text-lg overflow-x-auto"
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
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-sm md:text-lg"
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
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-sm md:text-lg"
              />
            </div>
            <div>
              <label className="block font-semibold text-xl mb-1">
                2024-{t("June-August")}:
              </label>
              <textarea
                value={t("Creating a platform (CRM) for my office")}
                disabled
                className="w-full bg-zinc-500 text-white border-none rounded-[5px] p-2 text-sm md:text-lg"
                rows={3} // Set the number of visible rows
                wrap="soft" // Enable text wrapping
              />
            </div>
          </div>
        </section>
      </main>

      <section className="px-8 md:px-32 mt-12 text-start ">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-gray-300">
          {t("skills")}
        </h1>
        <div className="space-y-5">
          <div>
            <label className="block font-semibold text-xl md:text-xl mb-1 text-gray-300">
              {t("Programming Languages & Subjects:")}
            </label>
            <div className="grid grid-cols-4 md:flex gap-4 md:gap-10 mt-5">
              <FaHtml5
                size={50}
                className="text-red-500"
                data-tooltip-id="html5"
                data-tooltip-content="HTML"
              />
              <FaCss3
                size={50}
                className="text-blue-600"
                data-tooltip-id="css"
                data-tooltip-content="CSS"
              />
              <FaJs
                size={50}
                className="text-yellow-400"
                data-tooltip-id="javascript"
                data-tooltip-content="Javascript"
              />
              <FaPhp
                size={50}
                className="text-purple-600"
                data-tooltip-id="php"
                data-tooltip-content="PHP"
              />
              <FaPython
                size={50}
                className="text-[#FFD43B] bg-gray-900"
                data-tooltip-id="python"
                data-tooltip-content="Python"
              />
            </div>
          </div>
          <hr className="border-gray-800" />
          <div>
            <label className="block font-semibold text-xl mb-1 text-gray-300">
              {t("Frameworks & Libraries" + " & Databases")}
            </label>
            <div className="grid grid-cols-4 md:flex gap-8 md:gap-10 mt-5">
              <FaLaravel
                size={50}
                className="bg-[#fffff1] rounded-[50%] text-red-500"
                data-tooltip-id="laravel"
                data-tooltip-content="Laravel"
              />
              <FaReact
                size={50}
                className="bg-[#ffffff99] rounded-[50%] text-[#61DAFB]"
                data-tooltip-id="react"
                data-tooltip-content="React"
              />
              <RiNextjsFill
                size={50}
                className="bg-[#000000] rounded-[50%] text-[#ffffff]"
                data-tooltip-id="nextjs"
                data-tooltip-content="Nextjs"
              />
              <SiRedux
                size={50}
                className="text-[#800060]"
                data-tooltip-id="redux"
                data-tooltip-content="Redux"
              />
              <SiReactquery
                size={50}
                className="text-[#ff4444]"
                data-tooltip-id="reactquery"
                data-tooltip-content="React-query"
              />
              <SiTypescript
                size={50}
                className="bg-white rounded-[10px] text-[#002fff]"
                data-tooltip-id="typescript"
                data-tooltip-content="Typescript"
              />
              <SiStyledcomponents
                size={50}
                className="text-[#db7093]"
                data-tooltip-id="styledcomponents"
                data-tooltip-content="Styled-components"
              />
              <RiTailwindCssFill
                size={50}
                className="text-[#38bdf8]"
                data-tooltip-id="tailwind"
                data-tooltip-content="Tailwind"
              />
              <SiMysql
                size={50}
                className="text-yellow-500 bg-gray-800 rounded-[30%]"
                data-tooltip-id="mysql"
                data-tooltip-content="Mysql"
              />
              <DiRedis
                size={50}
                className="text-red-500 bg-gray-800 rounded-[30%]"
                data-tooltip-id="redis"
                data-tooltip-content="Redis"
              />
            </div>
          </div>
          <hr className="border-gray-800" />
          <div>
            <label className="block font-semibold text-xl mb-1 text-gray-300">
              {t("Tools & Platforms:")}
            </label>
            <div className="grid grid-cols-4 md:flex gap-10 mt-5">
              <FaGithub
                size={50}
                className="bg-white rounded-[50%]"
                data-tooltip-id="github"
                data-tooltip-content="Github"
              />
              <FaGitlab
                size={50}
                className="bg-white text-orange-600 rounded-[46%]"
                data-tooltip-id="gitlab"
                data-tooltip-content="GitLab"
              />
              <FaDocker
                size={50}
                className="bg-white text-blue-600 rounded-[50%]"
                data-tooltip-id="docker"
                data-tooltip-content="Docker"
              />
              <RiSupabaseFill
                size={50}
                className="text-[green]"
                data-tooltip-id="supabase"
                data-tooltip-content="Supabase"
              />
              <SiNetlify
                size={50}
                className="text-[#00FFFF]"
                data-tooltip-id="netlify"
                data-tooltip-content="Netlify"
              />
              <FcLinux
                size={50}
                className="bg-[#f5f5f5] text-[#000000] rounded-[50%]"
                data-tooltip-id="linux"
                data-tooltip-content="Linux"
              />
            </div>
          </div>
          <hr className="border-gray-800" />
          <div>
            <label className="flex items-center gap-1 font-semibold text-lg md:text-xl mb-1 text-gray-300">
              <MdInfoOutline />
              {t("Other Skills:")}
            </label>
            <p className="w-full bg-zinc-400 text-white border-none rounded-[5px] p-2 text-sm md:text-lg">
              <b className="text-green-500">{t("English C1")}</b>,{" "}
              {t(
                "Problem-solving, Team collaboration, Friendly, Polite, Tolerable, Cognitive thinking, Thankful and etc."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-32 mt-12 text-start  ">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-gray-300">
          {t("Currently Learning / Planning to Learn")}
        </h1>
        <div className="space-y-5">
          <div>
            <label className="block font-semibold text-lg md:text-xl mb-1 text-gray-300">
              {t("Current Learning:")}
            </label>
            <div className="flex gap-10 mt-5">
              <HiDeviceMobile
                size={50}
                className="text-black bg-gray-200 rounded-[50%]"
                data-tooltip-id="mobile"
                data-tooltip-content="Mobile development"
              />
              <TbBrandReactNative
                size={50}
                className="text-[#61DAFB] bg-gray-200 rounded-[50%]"
                data-tooltip-id="reactnative"
                data-tooltip-content="React Native"
              />
              <FcDataSheet
                size={50}
                className="text-gray-200 bg-gray-900 p-2 rounded-[50%]"
                data-tooltip-id="ds"
                data-tooltip-content="Data Science"
              />
            </div>
          </div>
          <hr className="border-gray-800" />
          <div>
            <label className="block font-semibold text-lg md:text-xl mb-1 text-gray-300">
              {t("Planning to Learn:")}
            </label>
            <div className="flex gap-10 mt-5">
              <SiDjango
                size={50}
                className="text-gray-200 bg-gray-900 p-2 rounded-[50%]"
                data-tooltip-id="django"
                data-tooltip-content="Django"
              />
            </div>
          </div>
          <br />
        </div>
        <br />
      </section>

      <Tooltip id="html5" />
      <Tooltip id="css" />
      <Tooltip id="javascript" />
      <Tooltip id="php" />
      <Tooltip id="laravel" />
      <Tooltip id="react" />
      <Tooltip id="redux" />
      <Tooltip id="reactquery" />
      <Tooltip id="typescript" />
      <Tooltip id="styledcomponents" />
      <Tooltip id="tailwind" />
      <Tooltip id="gitlab" />
      <Tooltip id="github" />
      <Tooltip id="supabase" />
      <Tooltip id="netlify" />
      <Tooltip id="docker" />
      <Tooltip id="python" />
      <Tooltip id="django" />
      <Tooltip id="mobile" />
      <Tooltip id="mysql" />
      <Tooltip id="redis" />
      <Tooltip id="ds" />
      <Tooltip id="linux" />
      <Tooltip id="nextjs" />
      <Tooltip id="reactnative" />
    </div>
  );
}

export default Experience;
