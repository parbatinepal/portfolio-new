import React from "react";
import "./Education.css";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className=" education">
        <h2 className="col-12 mt-1 text-center">Education Details</h2>
        <hr />

        <VerticalTimeline>
          <div className="education8">
            <VerticalTimelineElement
              className="vertical-timeline-element--mdschool"
              contentStyle={{ background: "white", color: "black wd-50%" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2019 - 2023"
              iconStyle={{ background: " #138781", color: "black" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">BCA</h3>
              <h4 className="vertical-timeline-element-subtitle">Neapl,ktm</h4>
            </VerticalTimelineElement>
          </div>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
