import React from "react";
import "../styles/home.css";
import About from "../components/about";
import Contacts from "../components/contacts";
import Education from "../components/education";
import Projects from "../components/projects";
function Home() {
  return (
    <div>
      <nav
        id="navbar-example2"
        className="navbar mb-3 justify-content-center fixed-top myNav"
      >
        <ul className="nav fs-4 fw-bold ">
          <li className="nav-item ">
            <a className="nav-link item_hover sh" href="#scrollspyHeading1">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link item_hover_p sh" href="#scrollspyHeading2">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link item_hover_e sh" href="#scrollspyHeading3">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link item_hover_c sh" href="#scrollspyHeading4">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-body-tertiary  rounded-2"
        tabindex="0"
      >
        <div id="scrollspyHeading1">
          <About />
        </div>
        <div id="scrollspyHeading2">
          <Projects />
        </div>
        <div id="scrollspyHeading3">
          <Education />
        </div>
        <div id="scrollspyHeading4">
          <Contacts />
        </div>
      </div>
    </div>
  );
}
export default Home;
