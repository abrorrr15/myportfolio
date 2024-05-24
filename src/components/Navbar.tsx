import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MainNav from './MainNav';
import russia from "../../public/russia.png";
import UK from "../../public/united-kingdom.png";

function Navbar() {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
  };

  // Synchronize state with i18n language changes
  useEffect(() => {
    setActiveLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="lg:flex lg:flex-col xl:gap-20 gap-10 my-auto">
      <div className="lg:flex lg:flex-col gap-10 items-end fixed top-[15%] right-0">
        <div className="flex flex-col gap-4 mr-4">
          <button 
            onClick={() => changeLanguage('en')}
            className={`w-8 rounded ${activeLang === 'en' ? 'border-2 border-blue-500' : ''} hover:border-2 hover:border-gray-500`}
          >
            <img src={UK} alt="en" className='w-full h-full' />
          </button>
          <button 
            onClick={() => changeLanguage('ru')}
            className={`w-8 rounded ${activeLang === 'ru' ? 'border-2 border-blue-500' : ''} hover:border-2 hover:border-gray-500`}
          >
            <img src={russia} alt="ru" className='w-full h-full' />
          </button>
        </div>
        <MainNav />
      </div>
    </div>
  );
}

export default Navbar;
