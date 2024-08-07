import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">ShinCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#Blog" className="mr-5 hover:text-blue-400 duration-300">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mex-auto py-20 px-5 flex-col md:flex-row items-center justify-center">
          <div className="md:w-2/1 flex-grow mb-16 lg:pr-24 text-center">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hi! <br />
              I'm Masato
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm Masato. React web Developer
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button>
          </div>
          <div className="md:w-2/1 lg:max-w-lg w-5/6" />
          <img src="./images/profile-pic.jpg" alt=""></img>
        </div>
      </section>

      <section id="about" className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">Masato Sotoma</p>
            <p>Looking for an opportunity to be a web Developer</p>
          </div>
        </div>
        <div className="flex -m-4 flex-wrap">
          <div className="md:w-1/3 p-4">
            <div className="bg-gray-100 h-full p-8 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium">
                  Web Developer
                </h2>
              </div>
              <div>
                <p>I am studying codes</p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  See more
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 p-4">
            <div className="bg-gray-100 h-full p-8 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium">
                  Web Developer
                </h2>
              </div>
              <div>
                <p>I am studying codes</p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  See more
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 p-4">
            <div className="bg-gray-100 h-full p-8 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium">
                  Web Developer
                </h2>
              </div>
              <div>
                <p>I am studying codes</p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  See more
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
