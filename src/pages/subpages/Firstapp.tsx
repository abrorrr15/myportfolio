import { AiOutlineAppstore } from "react-icons/ai";
import logo from "./images/fon.jpg";
import calculator from "./images/calculator.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { FaGithub, FaLink } from "react-icons/fa";

function Firstapp() {
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
          <span className="ml-2 text-3xl font-medium">
            A Simple Calculator App
          </span>
        </div>
        <img src={logo} alt="logo" className="rounded-full w-16 h-16" />
      </header>

      {/* Main content */}
      <div className="flex-1 mt-8 px-4 py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            #1 Calculator App.
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            A basic html/css design style with pure <b className="text-red-500">React Js</b>
          </p>
          <img
            src={calculator}
            alt="Calculator"
            className="mx-auto mb-8 rounded-lg shadow-md"
          />
          <a href="https://calculator-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-400 hover:underline hover:underline-offset-4">Try this app on your own with this link <FaLink /></a>
          <br />
          <p className="text-lg text-gray-800 mb-6">
            With a clean and user-friendly interface, you can quickly add,
            subtract, multiply, and divide numbers with ease. The app also
            supports decimal numbers and basic memory functions, making it
            versatile for various calculation needs.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            <h4>Here is a main code functionality of calculator:</h4><br />
            <p onClick={() => setToggle(d => !d)} className="cursor-pointer text-blue-600">Click to see the code &darr;</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
              {toggle && <code>
                {`
import { useReducer, useState } from 'react';
import './calculator.css';

const initialState = {
  input: '',
};

function reducer(state, action) {
  try {
    switch (action.type) {
      case 'ADD_INPUT':
        return {
          ...state,
          input: state.input + action.payload,
        };
      case 'CALCULATE_RESULT':
        return {
          input: eval(state.input),
        };
      case 'CLEAR':
        return initialState;
      case 'CLEAR_E':
        return {
          input: state.input.slice(0, -1),
        };
      default:
        return state;
    }
  } catch (e) {
    console.error(e);
    return initialState;
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInput(value) {
    dispatch({ type: 'ADD_INPUT', payload: value });
  }
  function handleResult() {
    dispatch({ type: 'CALCULATE_RESULT' });
  }
  function clear() {
    dispatch({ type: 'CLEAR' });
  }
  function clearE() {
    dispatch({ type: 'CLEAR_E' });
  }

  return (
    <div className="container">
      <div>
        <textarea
          type="text"
          placeholder="0"
          rows="1"
          disabled
          className="output"
          value={state.input}
        />
      </div>
      <div className="buttons">
        <button onClick={() => handleInput('%')}>%</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={() => clearE()}>CE</button>
        <button onClick={() => clear()}>AC</button>
      </div>
      <div className="buttons">
        <button className="num" onClick={() => handleInput('7')}>7</button>
        <button className="num" onClick={() => handleInput('8')}>8</button>
        <button className="num" onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>x</button>
      </div>
      <div className="buttons">
        <button className="num" onClick={() => handleInput('4')}>4</button>
        <button className="num" onClick={() => handleInput('5')}>5</button>
        <button className="num" onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('+')}>+</button>
      </div>
      <div className="buttons">
        <button className="num" onClick={() => handleInput('1')}>1</button>
        <button className="num" onClick={() => handleInput('2')}>2</button>
        <button className="num" onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('-')}>-</button>
      </div>
      <div className="buttonA">
        <button className="dot" onClick={() => handleInput('.')}>.</button>
        <button className="equal" onClick={handleResult}>=</button>
      </div>
    </div>
  );
}
                `}
              </code>}
            </pre>
            <a
            href="https://github.com/abrorrr15/calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 cursor-pointer text-red-600 hover:underline hover:underline-offset-4"
          >
            Or you can check out code via <span><FaGithub size={25} className="text-black"/></span>
          </a>
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

export default Firstapp;
