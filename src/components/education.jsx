import React, { useState } from "react";
import "../styles/education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import myEducation from "../data/education";
function Education() {
  const [educationData] = useState(myEducation);

  return (
    <div className="p-5 container-fluid contacts text-center white1">
      <h1 className="education">Education</h1>
      <VerticalTimeline>
        {educationData
          ? educationData.map((item, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                key={index}
                contentStyle={{ background: "rgb(0, 128, 0)", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(0, 128, 0)" }}
                date={item.date}
                iconStyle={{ background: "rgb(0, 128, 0)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
              >
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.university}
                </h4>
              </VerticalTimelineElement>
            ))
          : null}
      </VerticalTimeline>
    </div>
  );
}
export default Education;
