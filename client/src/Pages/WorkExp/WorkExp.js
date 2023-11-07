import React from "react";
import {FaReact} from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className=" work">
        <div className=" container work-exp">
          <h2 className="col-12 mt-1 text-center">Work Experience</h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#138781", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #138781",
              }}
              date="2023 present"
              iconStyle={{ background: "black", color: "#fff" }}
              icon={<FaReact />}
            >
              <h3 className="vertical-timeline-element-title">
                React
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Cliff Byte,Mid Baneshower</h4>
              <p>
                Javascript,React ,Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
