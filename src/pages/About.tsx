import React, { useEffect, useRef } from 'react';
import Logo from '../components/Logo';
import { RxAvatar } from 'react-icons/rx';
import { FaGithub, FaPhone, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BiLogoInstagram } from 'react-icons/bi';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const contentElements = contentRef.current?.querySelectorAll('.fade-in');
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
    <div className="min-h-screen overflow-y-auto custom-scrollbar" ref={contentRef}>
      <header className="flex items-center justify-between font-medium text-white fade-in">
        <div className="flex items-center m-[2em] mb-[1em] xl:mb-[1.3em] xl:m-[1.5em] 2xl:m-[1em] 2xl:mb-[1.5em] text-3xl font-medium text-white fade-in">
          <RxAvatar size={35} />
          <span className="ml-2">{t('aboutMe')}</span>
        </div>
        <Logo />
      </header>

      <main className="px-8 ml-3 md:px-32 text-start bg-[#ffffff9f] rounded-lg shadow-lg fade-in">
        <section className="my-8">
          <h1 className="lg:text-4xl 2xl:text-2xl font-bold mb-4">
            {t('introduction')}
          </h1>
          <p className="lg:text-lg 2xl:text-md">
            {t('hiIm')} <b>Abror Xoliqov</b>, {t('softwareEngineer')} <b><i>(front-end developer)</i></b> with a strong background in web development and a keen interest in new technologies.
          </p>
        </section>
        <hr className="w-full" />
        <section className="my-8">
          <h1 className="lg:text-4xl 2xl:text-2xl font-bold mb-4">
            {t('background')}
          </h1>
          <p className="lg:text-lg 2xl:text-md">
            I am a student at the National University of Uzbekistan Tashkent. I have worked on various projects, both independently and as part of a team, and I am currently employed at <b>IST Telekom</b>. Down below you can see photos of my university and office.
          </p>
          <br />
          <div className="grid grid-cols-2 grid-rows-1 place-items-center">
            <img
              src="univer.jpg"
              alt="O'zMu"
              className="w-[13rem] h-[13rem] rounded-[10px]"
            />
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="h-[13rem] w-[13rem] rounded-[10px]"
            >
              <SwiperSlide>
                <img src="etc.jpg" alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="work1.jpg" alt="work1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="work2.jpg" alt="work2" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <hr className="w-full" />
        <section className="my-8">
          <h1 className="lg:text-4xl 2xl:text-2xl font-bold mb-4">
            {t('studyJourney')}
          </h1>
          <p className="lg:text-lg 2xl:text-md">
            My programming journey began on <u>January 12, 2024</u>. Without access to offline courses or a personal teacher, I relied solely on <b>YouTube</b> lessons to learn programming. Starting without a computer, only a smartphone. I faced and overcame numerous challenges. This experience not only honed my problem-solving skills but also instilled a strong sense of resilience and self-discipline, setting me apart from other applicants. In addition, I have taken IELTS in 2023 year studying on my own too, score you can see below in the photo.
          </p>
          <br />
          <img src="ielts.png" alt="ielts" className="w-fit rounded-[15px]" />
        </section>
        <hr className="w-full" />
        <section className="my-8">
          <h1 className="lg:text-4xl 2xl:text-2xl font-bold mb-4">
            {t('skills')}
          </h1>
          <p className="lg:text-lg 2xl:text-md">
            I am proficient in HTML, CSS, JavaScript, and have experience with frameworks and libraries like React, Redux and React-query. I am also familiar with TypeScript, Git, and various development tools.
          </p>
        </section>
        <hr className="w-full" />
        <section className="my-8">
          <h1 className="lg:text-4xl 2xl:text-2xl font-bold mb-4">
            {t('currentWork')}
          </h1>
          <p className="lg:text-lg 2xl:text-md">
            Currently, I am working on several personal projects, exploring new technologies like Vue.js and Next js, and contributing to open source projects.
          </p>
        </section>
        <hr className="w-full" />
        <section className="my-8">
          <h1 className="lg:text-4xl 2xl:text-2xl font-bold mb-4">
            {t('hobbiesAndInterests')}
          </h1>
          <p className="lg:text-lg 2xl:text-md">
            In my free time, I enjoy coding and reading tech blogs. I also love traveling and exploring new cultures.
          </p>
        </section>
        <hr className="w-full" />
        <section className="my-8">
          <h1 className="lg:text-4xl 2xl:text-2xl font-bold mb-4">
            {t('contact')}
          </h1>
          <p className="lg:text-lg 2xl:text-md">
            Feel free to reach out to me via email at <b>abrorrr15@gmail.com</b> or connect with me on social media:
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="http://github.com/abrorrr15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="text-black" />
            </a>
            <a
              href="http://www.instagram.com/abrorrr15/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoInstagram
                size={30}
                className="bg-gray-200 rounded-[50%] text-[#bc2a8d]"
              />
            </a>
            <a
              href="https://t.me/abrorrr15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={30} className="text-blue-500" />
            </a>
            <Link to="/contact">
              <FaPhone size={30} className="text-green-500" />
            </Link>
          </div>
          <br />
        </section>
      </main>
    </div>
  );
}

export default About;
