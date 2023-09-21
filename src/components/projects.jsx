import React, { useState } from "react";
import "../styles/projects.css";
import projectsData from "../data/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
function Projects() {
  const [projects] = useState(projectsData);
  return (
    <div className="p-5 container-fluid contacts text-center">
      <h1 className="project pb-5">Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 g-4">
        {projects
          ? projects.map((item, index) => {
              return (
                <div className="col">
                  <div className="card h-100" key={index}>
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                    <div class="card-footer">
                      <a
                        href={item.github}
                        className="btn btn-dark p-1 m-1"
                        target="blank"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="xl"
                          style={{ color: "#fcfcfc" }}
                        />
                        &nbsp;Source Code
                      </a>
                      {item.url ? (
                        <a
                          href={item.url}
                          className="btn btn-dark p-1 m-1"
                          target="blank"
                        >
                          <FontAwesomeIcon
                            icon={faChrome}
                            size="xl"
                            style={{ color: "#fcfcfc" }}
                          />
                          &nbsp; Website
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
export default Projects;
