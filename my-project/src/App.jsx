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

      <section>
        <div>
          <div>
            <h1>
              Hi! <br />
              I'm Masato
              <br />
              Web Developer
            </h1>
            <p>I'm Masato. React web Developer</p>
            <button>Contact Me</button>
          </div>
          <div />
          <img src="./images/profile-pic.jpg" alt=""></img>
        </div>
      </section>
    </>
  );
}

export default App;
