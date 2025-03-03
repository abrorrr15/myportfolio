import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BiFlag,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTelegram,
  BiPhone,
} from "react-icons/bi";
import {
  IoInformationCircleOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { useCreateContact } from "../components/useCreateContact";
import { useTranslation } from "react-i18next";

type ContactFormInputs = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const { createData, isLoading } = useCreateContact();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { register, handleSubmit, reset } = useForm<ContactFormInputs>();
  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleContactDetails = () => {
    setIsOpen(!isOpen);
  };
  const toggleContactForm = () => {
    setIsOpen(false);
  };
  function onSubmit(data: ContactFormInputs) {
    createData(
      { ...data },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible2");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const contentElements = contentRef.current?.querySelectorAll(".fade-in2");
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
      className="grid lg:gap-4 h-screen mx-11 overflow-hidden custom-scrollbar select-none"
      ref={contentRef}
    >
      {/* Contact Form */}
      <form
        className={`flex flex-col p-2 items-center justify-center my-10 ${
          isOpen ? "hidden" : ""
        }`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-medium text-white mb-5 fade-in2">
          {t("contactForm")}
        </h1>
        <div className="flex flex-col gap-4 w-full max-w-md">
          {/* Form inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="fade-in2">
              <label
                htmlFor="name"
                className="text-gray-300 gap-1 flex items-center"
              >
                <span>
                  <IoInformationCircleOutline className="text-red-500" />
                </span>
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jhon"
                {...register("name", {
                  required: t("This field is required") as string,
                })}
                className="w-full py-2 px-3 mt-1 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Other input fields */}
            <div className="fade-in2">
              <label htmlFor="phone" className="text-gray-300">
                {t("phone")}
              </label>
              <input
                type="text"
                id="phone"
                placeholder="9981234567"
                {...register("phone")}
                className="w-full py-2 px-3 mt-1 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="fade-in2">
              <label
                htmlFor="email"
                className="text-gray-300 flex items-center gap-1"
              >
                <span>
                  <IoInformationCircleOutline className="text-red-500" />
                </span>
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                placeholder="exmple@gmail.com"
                {...register("email", {
                  required: t("This field is required") as string,
                })}
                className="w-full py-2 px-3 mt-1 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="col-span-2 fade-in2">
            <label
              htmlFor="message"
              className="text-gray-300 flex items-center gap-1"
            >
              <span>
                <IoInformationCircleOutline className="text-red-500" />
              </span>
              {t("message")}
            </label>
            <textarea
              rows={3}
              id="message"
              {...register("message", {
                required: t("This field is required") as string,
              })}
              className="w-full py-2 px-3 mt-1 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex fade-in2 whitespace-nowrap text-sm">
            <button
              disabled={isLoading}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 fade-in2"
            >
              {t("submit")}
            </button>
            <button
              onClick={toggleContactDetails}
              className="bg-[#ff5b5b] hover:bg-[#ce4949] duration-[.3s] text-white px-2 md:px-3 md:py-1 rounded ml-4 fade-in2"
            >
              {t("showContactDetails")}
            </button>
          </div>
        </div>
      </form>

      {/* Contact Details */}
      {isOpen && (
        <div>
          <div
            className="text-red-500 mt-3 cursor-pointer"
            onClick={toggleContactForm}
          >
            &larr; <b>{t("returnToContactForm")}</b>
          </div>
          <h1 className="text-red-300 font-bold text-3xl my-5 mx-3">
            {t("myContactDetails")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#ffffff74] p-5 text-sm md:text-base rounded-md">
            {/* First Column */}
            <div>
              <p className="flex items-center select-none mb-3">
                <IoPersonCircleOutline className="mr-2" />
                Abror X.A
              </p>
              <hr className="w-full my-2" />
              <p className="flex items-center mb-3">
                <BiPhone className="mr-2" />
                <span className="select-all">+998-33-__-__</span>
              </p>
              <hr className="w-full my-2" />
              <p className="flex items-center">
                <TfiEmail className="mr-2" />
                <span className="select-all">abrorrr15@gmail.com</span>
              </p>
            </div>

            {/* Second Column */}
            <div>
              <p className="flex items-center select-none mb-3">
                <BiFlag className="mr-2" />
                <span>{t("uzbekistan")}</span>
              </p>
              <hr className="w-full my-2" />
              <p className="flex items-center gap-4 mb-3 select-none">
                <a
                  href="https://t.me/abrorrr15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoTelegram
                    size={26}
                    className="bg-gray-200 rounded-[50%] text-[#0088cc]"
                  />
                </a>
                <a
                  href="http://www.instagram.com/abrorrr15/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoInstagram
                    size={26}
                    className="bg-gray-200 rounded-[50%] text-[#bc2a8d]"
                  />
                </a>
                <a
                  href="http://github.com/abrorrr15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoGithub
                    size={26}
                    className="bg-gray-200 rounded-[50%]"
                  />
                </a>
                <a
                  href="https://tashkent.hh.uz/resume/7e81e0a8ff0e3428390039ed1f7a73784f7862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 px-2 rounded-[9px] text-white font-sans text-[1.1rem] font-[600]"
                >
                  Hh
                </a>
              </p>
              <hr className="w-full my-2" />
              <div className="flex items-center mb-3">
                <button
                  onClick={handleDownload}
                  className="bg-[#ff5b5b] hover:bg-[#ce4949] duration-[.3s] text-white px-1 md:px-3 py-1 rounded"
                >
                  {t("downloadCV")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
