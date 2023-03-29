import React from "react";
import backdrop from "../images/backdrop.png";

const WorkingProcess = () => {
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold", color: "grey", fontSize: "28px" }}>
          OUR WORKING PROCESS
        </h2>
        <div
          style={{ display: "flex", flexDirection: "initial", margin: "10px" }}
        >
          <span style={{ marginLeft: "10px", marginRight: "209px" }}>
            We Get Your Requirements
          </span>
          <span style={{ marginLeft: "10px", marginRight: "227px" }}>
            Designing & Get Conformation
          </span>
          <span>Testing & Maintenance</span>
        </div>

        <img
          src={backdrop}
          alt="backdrop"
          style={{ height: "300px", width: "100%" }}
        />

        <div
          style={{ display: "flex", flexDirection: "initial", margin: "10px" }}
        >
          <span style={{ marginLeft: "161px", marginRight: "235px" }}>
            Market Research & Feasibility Analysis
          </span>
          <span style={{ marginLeft: "-22px" }}>Coding & Development</span>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
