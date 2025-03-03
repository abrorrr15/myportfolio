import { useTranslation } from "react-i18next";
import MainNav from "./MainNav";
import useLanguageStore from "../zustand/useLanguageStore";

function Navbar() {
  const { language, setLanguage } = useLanguageStore();
  const { i18n } = useTranslation();

  return (
    <div className="z-20 lg:flex lg:flex-col xl:gap-20 gap-10 my-auto">
      <div className="lg:flex lg:flex-col gap-10 items-end fixed top-[15%] right-0">
        <div className="flex flex-col gap-4 mr-4">
          <button
            onClick={() => {
              setLanguage("en");
              i18n.changeLanguage("en");
            }}
            className={`w-8 rounded ${
              language === "en" ? "border-2 border-blue-500" : ""
            } hover:border-2 hover:border-gray-500`}
          >
            <img src="/united-kingdom.png" alt="en" className="w-full h-full" />
          </button>
          <button
            onClick={() => {
              setLanguage("ru");
              i18n.changeLanguage("ru");
            }}
            className={`w-8 rounded ${
              language === "ru" ? "border-2 border-blue-500" : ""
            } hover:border-2 hover:border-gray-500`}
          >
            <img src="/russia.png" alt="ru" className="w-full h-full" />
          </button>
        </div>
        <MainNav />
      </div>
    </div>
  );
}

export default Navbar;
