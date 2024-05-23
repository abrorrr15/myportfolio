import { AiOutlineAppstore } from "react-icons/ai";
import logo from "./images/fon.jpg";
import filmIntro from "./images/film-intro.png";
import filmSearch from "./images/film-search.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaLink } from "react-icons/fa";

function Secondapp() {
  const [toggle, setToggle] = useState(false);
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
          <span className="ml-2 text-3xl font-medium">A Film Search App</span>
        </div>
        <img src={logo} alt="logo" className="rounded-full w-16 h-16" />
      </header>

      {/* Main content */}
      <div className="flex-1 mt-8 px-4 py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            #2 Film Search App.
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            A bit more complex html/css design style with pure{" "}
            <b className="text-red-500">React Js</b>
          </p>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-[800px] mb-3 rounded-lg shadow-md"
          >
            <SwiperSlide>
              <img
                src={filmIntro}
                alt="film"

              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={filmSearch}
                alt="film"
              />
            </SwiperSlide>
          </Swiper>
          <a href="https://film-fetching.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-400 hover:underline hover:underline-offset-4">Try this app on your own with this link <FaLink /></a>
          <br />
          <p className="text-lg text-gray-800 mb-6">
            It was my first bigger project which I built within 1 month of study. As you can see it is not a complicated project. Just to show my fetching skills {";)"}
          </p>
          <p className="text-lg text-gray-800 mb-6">
            <h4>Here is a main code functionality of film app:</h4>
            <br />
            <p
              onClick={() => setToggle((d) => !d)}
              className="cursor-pointer text-blue-600"
            >
              Click to see the code &darr;
            </p>

            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
              {toggle && (<code>{`
import { useEffect, useState, useRef } from "react";
import "./film.css";
import { useMovies } from "./useMovies";
import { useLang } from "./useLang";
import ru from "./icons/russia.png";
import eng from "./icons/united-kingdom.png";
import uz from "./icons/flag.png";
import Spinner from "../Spinner";

const now = new Intl.DateTimeFormat("en", {
  year: "numeric",
}).format(new Date());
const future = new Date().getFullYear() + 1;
const time = \`\${now}-$ {future}\`;

export default function Film() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const { filmData, loading, errorMsg } = useMovies(query, setResult);
  const { rus, english, uzbek, activeLang, handleChangeLang } = useLang(
    search,
    handleButton
  );

  function handleButton() {
    setQuery(search);
  }

  useEffect(() => {
    document.title = \`Film/\${activeLang}\`;
    return () => {
      document.title = "Hello to my website!";
    };
  }, [activeLang]);

  return (
    <Top>
      <Head
        search={search}
        query={query}
        onInput={(e) => setSearch(e.target.value)}
        onButton={handleButton}
        onLang={handleChangeLang}
        activeLang={activeLang}
        setQuery={setQuery}
      >
        {(!rus && !uzbek && english && <LogoEng />) ||
          (!english && !uzbek && rus && <LogoRu />) ||
          (!rus && !english && uzbek && <LogoUz />)}
      </Head>
      <Main>
        {
          (!rus && !uzbek && english && (
            <FoundEng data={result} errorMsg={errorMsg} />
          )) ||
            (!english && !uzbek && rus && (
              <FoundRu data={result} errorMsg={errorMsg} />
            )) ||
            (!rus && !english && uzbek && (
              <FoundUz data={result} errorMsg={errorMsg} />
            ))
        }
        <br />
        {loading && <Spinner />}
        {!loading && !errorMsg && filmData && <First data={filmData} />}
      </Main>
      {(!rus && !uzbek && english && <FootEng />) ||
        (!english && !uzbek && rus && <FootRu />) ||
        (!rus && !english && uzbek && <FootUz />)}
    </Top>
  );
}
function Top({ children }) {
  return <div className="container">{children}</div>;
}
function Head({
  children,
  onInput,
  search,
  onButton,
  onLang,
  activeLang,
  setQuery,
}) {
  const inputEl = useRef(null);
  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Digit1") {
        onLang("rus");
      } else if (e.code === "Digit2") {
        onLang("eng");
      } else if (e.code === "Digit3") {
        onLang("uz");
      }
    });
  }, [activeLang]);

  return (
    <div className="head">
      {children}
      <div className="search">
        <input
          type="text"
          placeholder="Film name..."
          value={search}
          ref={inputEl}
          onChange={onInput}
        />

        <button type="submit" onClick={onButton}>
          🍭
        </button>
      </div>
      <select onChange={(e) => onLang(e.target.value)} value={activeLang}>
        <option value="rus">ru</option>
        <option value="eng">eng</option>
        <option value="uz">uz</option>
      </select>
      <div className="lang">
        {/* Russian flag */}
        <img
          src={ru}
          value="rus"
          onClick={() => onLang("rus")}
          className={activeLang === "rus" ? "active" : ""}
          alt="Russian Flag"
        />
        {/* English flag */}
        <img
          src={eng}
          value="eng"
          onClick={() => onLang("eng")}
          className={activeLang === "eng" ? "active" : ""}
          alt="English Flag"
        />
        {/* Uzbek flag */}
        <img
          src={uz}
          value="uz"
          onClick={() => onLang("uz")}
          className={activeLang === "uz" ? "active" : ""}
          alt="Uzbek Flag"
        />
      </div>
    </div>
  );
}

function LogoEng() {
  return <h2 className="logo-eng">🍟FilmSearch</h2>;
}
function LogoRu() {
  return <h2 className="logo-ru">🍟Поиск Фильмов</h2>;
}
function LogoUz() {
  return <h2 className="logo-uz">🍟Kinolar Olami</h2>;
}
function First({ data }) {
  return (
    <div className="film-list">
      {data?.map((item, index) => (
        <ul key={index}>
          <img src={item.Poster} />
          <li>{item.Title}</li>
          <p>
            <span>Year:</span> <u>{item.Year}</u>
          </p>
        </ul>
      ))}
    </div>
  );
}
function Main({ children, error }) {
  return (
    <div className="film-container">
      <br />
      {children}
    </div>
  );
}
function FoundEng({ data, errorMsg }) {
  return (
    <p>
      {(errorMsg && <ErrorEng />) ||
        (data.totalResults && \`Film Found: \${data.totalResults}\`)}
    </p>
  );
}
function FoundRu({ data, errorMsg }) {
  return (
    <p>
      {(errorMsg && <ErrorRu />) ||
        (data.totalResults && \`Найдено: \${data.totalResults}\`)}
    </p>
  );
}
function FoundUz({ data, errorMsg }) {
next
ChatGPT
jsx
Копировать код
  return (
    <p>
      {(errorMsg && <ErrorUz />) ||
        (data.totalResults && \`Filmlar soni: \${data.totalResults}\`)}
    </p>
  );
}
function ErrorRu() {
  return <p>He Найдено</p>;
}
function ErrorEng() {
  return <p>Not Found</p>;
}
function ErrorUz() {
  return <p>Malumot Topilmadi</p>;
}
function FootRu() {
  return (
    <div className="foot">
      <h3>🎁Автор Аброр</h3>
      <time>{time}</time>
    </div>
  );
}
function FootUz() {
  return (
    <div className="foot">
      <h3>🎁Muallif - Abror</h3>
      <time>{time}</time>
    </div>
  );
}
function FootEng() {
  return (
    <div className="foot">
      <h3>🎁Made by Abror</h3>
      <time>{time}</time>
    </div>
  );
}
`}</code>)}
            </pre>

          </p>
        </div>
      </div>

      {/* Back button */}
      <button
        className="absolute top-4 right-4 px-4 py-2 text-lg bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-200 duration-300 font-mono"
        onClick={() => navigate(-1)}
      >
        &larr; BACK
      </button>
    </div>
  );
}

export default Secondapp;
