import React from "react";
import "../styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faSquareJs,
  faNode,
  faEnvira,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div className=" pt-5 mt-5 text-center about">
      <div className="row container-fluid">
        <div className="col-10 col-sm-10 col-lg-4 col-md-4 px-5 py-5 mx-5 ">
          <img
            src="assets/avikphotonew.jpg"
            alt=""
            className="img-fluid rounded-circle avik_image sh "
          />
        </div>
        <div className="col-md-7 col-lg-7 col-12 col-sm-12">
          <div className="fs-1 fw-bold p-2 name sh">
            {"<"}Avik Mitra {"/"}
            {">"}
          </div>
          <div className="fs-4 mx-1 p-3 my-2 white text-center">
            <em>
              Enthusiastic and highly motivated fresher MERN Stack Developer
              with a strong foundation in web development technologies. Eager to
              contribute my skills and knowledge to dynamic projects and grow as
              a developer. Possess a solid understanding of front-end and
              back-end development.Quick learner, team player, and problem
              solver with a passion for staying up-to-date with the latest
              industry trends.
            </em>
          </div>
          <div className="p-3">
            <FontAwesomeIcon
              icon={faReact}
              beat
              size="2xl"
              style={{ color: "#61dbfb" }}
            />
            &nbsp; &nbsp; &nbsp;
            <FontAwesomeIcon
              icon={faHtml5}
              beat
              size="2xl"
              style={{ color: "#E34C26" }}
            />
            &nbsp; &nbsp; &nbsp;
            <FontAwesomeIcon
              icon={faCss3Alt}
              beat
              size="2xl"
              style={{ color: "#264de4" }}
            />
            &nbsp; &nbsp; &nbsp;
            <FontAwesomeIcon
              icon={faBootstrap}
              beat
              size="2xl"
              style={{ color: "#8004fb" }}
            />
            &nbsp; &nbsp; &nbsp;
            <FontAwesomeIcon
              icon={faSquareJs}
              beat
              size="2xl"
              style={{ color: "#F0DB4F" }}
            />
            &nbsp; &nbsp; &nbsp;
            <FontAwesomeIcon
              icon={faNode}
              beat
              size="2xl"
              style={{ color: "#3C873A" }}
            />
            &nbsp; &nbsp; &nbsp;
            <FontAwesomeIcon
              icon={faNodeJs}
              beat
              size="2xl"
              style={{ color: "#68A063" }}
            />{" "}
            &nbsp; &nbsp; &nbsp;
            <FontAwesomeIcon
              icon={faEnvira}
              beat
              size="2xl"
              style={{ color: "#4DB33D" }}
            />
          </div>
          <div className="fs-3 p-3 mb-3  fw-bold white1">
            Download my resume{" "}
            <a href="assets\Avik@CV@2023.pdf" download="resume" className="">
              <FontAwesomeIcon
                icon={faDownload}
                size="xl"
                style={{ color: "#db0000" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
