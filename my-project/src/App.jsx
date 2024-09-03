import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container mx-auto flex p-5 items-center md:flex-row flex-col">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Masa Coding</span>
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
            <a
              href="#projects"
              className="mr-5 hover:text-blue-400 duration-300"
            >
              Projects
            </a>
          </nav>
          <div className="flex mt-4 md:mt-0 space-x-5">
            <a
              href="https://github.com/masatosotoma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIgogICAgICAgICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBmaWxsPSJibGFjayI+PHBhdGggZD0iTTUwMCwyMi4xYy0yNzAuNiwwLTQ5MCwyMTkuNC00OTAsNDkwYzAsMjE2LjUsMTQwLjQsNDAwLjIsMzM1LjEsNDY0LjljMjQuNSw0LjUsMzMuNS0xMC42LDMzLjUtMjMuNmMwLTExLjctMC41LTUwLjMtMC43LTkxLjJjLTEzNi4zLDI5LjYtMTY1LjEtNTcuOC0xNjUuMS01Ny44Yy0yMi4zLTU2LjYtNTQuNC03MS43LTU0LjQtNzEuN2MtNDQuNS0zMC40LDMuNC0yOS44LDMuNC0yOS44YzQ5LjIsMy41LDc1LjEsNTAuNSw3NS4xLDUwLjVjNDMuNyw3NC45LDExNC42LDUzLjMsMTQyLjYsNDAuN2M0LjQtMzEuNywxNy4xLTUzLjMsMzEuMS02NS41Yy0xMDguOC0xMi40LTIyMy4zLTU0LjQtMjIzLjMtMjQyLjJjMC01My41LDE5LjEtOTcuMiw1MC41LTEzMS41Yy01LjEtMTIuMy0yMS45LTYyLjIsNC43LTEyOS43YzAsMCw0MS4yLTEzLjIsMTM0LjgsNTAuMmMzOS4xLTEwLjksODEtMTYuMywxMjIuNy0xNi41YzQxLjYsMC4yLDgzLjYsNS42LDEyMi43LDE2LjVjOTMuNS02My40LDEzNC42LTUwLjIsMTM0LjYtNTAuMmMyNi43LDY3LjUsOS45LDExNy4zLDQuOCwxMjkuN2MzMS40LDM0LjMsNTAuNCw3OCw1MC40LDEzMS41YzAsMTg4LjItMTE0LjYsMjI5LjYtMjIzLjcsMjQxLjhjMTcuNiwxNS4yLDMzLjIsNDUsMzMuMiw5MC43YzAsNjUuNi0wLjYsMTE4LjMtMC42LDEzNC41YzAsMTMsOC44LDI4LjMsMzMuNywyMy41Qzg0OS44LDkxMi4xLDk5MCw3MjguNSw5OTAsNTEyLjFDOTkwLDI0MS41LDc3MC42LDIyLjEsNTAwLDIyLjFMNTAwLDIyLjF6Ii8+PC9nPgo8L3N2Zz4="
                alt="Github Masato Sotoma"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/masato-sotoma-5020b87a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <img
                src="./images/linkedin-icon.png"
                alt="LinkedIn Masato Sotoma"
                className="w-6 h-6"
              />
            </a>
          </div>
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
              Hi, I'm Masato! I'm currently diving into the world of web
              development, with a focus on JavaScript and React. I'm also
              getting my hands dirty with a bit of CSS to enhance my styling
              skills. I'm passionate about building interactive and responsive
              web applications and am excited to keep learning and growing in
              this field.
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button>
          </div>
          <div className="md:w-2/1 lg:max-w-lg w-5/6" />
          <img
            src="./images/profile-pic.jpg"
            alt=""
            width={"800px"}
            height={"800px"}
            className={"flex-auto border-0 rounded"}
          ></img>
        </div>
      </section>

      <section id="about" className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">Masato Sotoma</p>
            <p>
              I was born and raised in Okinawa, Japan, and moved to Toronto,
              Canada in 2014, where I became a permanent resident. I have a
              passion for traveling and currently work as a travel agent
              supervisor. For the past three years, I've been self-studying
              programming, focusing on front-end technologies like JavaScript
              and React. Now, I'm excited to take on the challenge of
              transitioning into a career as a front-end developer or software
              engineer.
            </p>
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
                  Junior Frontend Web Developer
                </h2>
              </div>
              <div>
                <p>
                  I have been self-studying programming with a focus on
                  JavaScript, React, and CSS, continuously expanding my skills
                  and building a strong foundation in web development. I
                  recently earned a certificate from the Meta Frontend Developer
                  course, where I gained valuable knowledge in modern frontend
                  technologies, and I’m eager to showcase my skills in
                  real-world projects.
                </p>
                <a
                  href="https://coursera.org/share/c44cef329628842709a95e0d2a570960"
                  className="flex mt-3 text-green-500 items-center"
                >
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
                  Senior Travel Agent/Operational Manager
                </h2>
              </div>
              <div>
                <p>
                  I bring over 10 years of experience as a travel agent and
                  operational manager, where I’ve honed my customer service
                  skills and expertise in using Global Distribution Systems
                  (GDS) for booking flights, hotels, and rental cars. I’ve also
                  had the opportunity to manage and train a team of more than 10
                  staff members, ensuring efficient operations and excellent
                  service delivery.
                </p>
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
                  Japanese Tutor
                </h2>
              </div>
              <div>
                <p>
                  I have been teaching Japanese for over 4 years, working with
                  more than 10 students to help them improve their language
                  skills and understanding of Japanese culture.
                </p>
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

      {/*More sections*/}
      <section id="skills" className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div>
            <img
              src="./images/programming.jpg"
              alt=""
              className="rounded"
              width={500}
              height={500}
            ></img>
          </div>
          <div className="lg:pl-12 lg:py-6">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10">
              My skills
            </h1>
            <div className="w-full">
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
              <h2>CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "85%" }}
                >
                  70%
                </div>
              </div>
              <h2>JavaScript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "85%" }}
                >
                  80%
                </div>
              </div>
              <h2>React</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "85%" }}
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Project section*/}
      <section id="projects" className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">
              My projects
            </h1>
            <p className="pb-10">List</p>
            <p>
              Hi, I'm Masato! I'm currently diving into the world of web
              development, with a focus on JavaScript and React. I'm also
              getting my hands dirty with a bit of CSS to enhance my styling
              skills. I'm passionate about building interactive and responsive
              web applications and am excited to keep learning and growing in
              this field. Looking for an opportunity to be a web Developer
            </p>
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
                  Chatting-App
                </h2>
              </div>
              <div>
                <p>Line-Contact App project</p>
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
                  To Do List
                </h2>
              </div>
              <div>
                <p>To Do List App project </p>
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
