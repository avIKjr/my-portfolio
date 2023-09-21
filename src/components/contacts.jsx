import React from "react";
import "../styles/contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Contacts() {
  return (
    <div className="p-5 container-fluid contacts text-center">
      <h1 className="pb-3 contact">My Contacts</h1>
      <div className="p-2">
        <span>
          {" "}
          <FontAwesomeIcon
            icon={faEnvelope}
            size="xl"
            style={{ color: "#c71610" }}
          />
        </span>
        <span className="p-2">
          <a href="mailto:avikjr11@gmail.com" className="white" target="blank">
            avikjr11@gmail.com
          </a>
        </span>
      </div>
      <div className="p-2">
        <span>
          <FontAwesomeIcon
            icon={faPhone}
            size="xl"
            style={{ color: "#2f75ee" }}
          />
        </span>
        <span className="white p-2">
          <a href="tel:+917003492296" className="white" target="blank">
            +91 7003492296
          </a>
        </span>
      </div>
      <div className="p-2">
        <span>
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            style={{ color: "#fcfcfc" }}
          />
        </span>
        <span className="p-2">
          <a href="https://github.com/avIKjr" className="white" target="blank">
            https://github.com/avIKjr
          </a>
        </span>
      </div>
      <div className="p-2">
        <span>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="xl"
            style={{ color: "#0072b1" }}
          />
        </span>
        <span className=" p-2">
          <a
            href="https://www.linkedin.com/in/avik-mitra-b2843b255"
            className="white"
            target="blank"
          >
            https://www.linkedin.com/in/avik-mitra-b2843b255
          </a>
        </span>
      </div>
    </div>
  );
}
export default Contacts;
