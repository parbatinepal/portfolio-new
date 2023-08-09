import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechStackList";
const Techstack = () => {
  return (
    <>
      <div className="container techstack">
        <div className="technologies_stack">
          <h2 className="col-12 mt-1 text-center">Technologies stack</h2>
        </div>
        <hr />
        <p className="pb-3 text-center">
          👉including programming language,framework, database,front-end,
          back-end tools, and APIs
        </p>

        <div className="row">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="text-center">
                        <tech.icons className="tech-icon text-center" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
