import React from "react";
import about from "../images/about.png";
import all from "../images/all.png";

const Home = () => {
  return (
    <div
      className="grid-container"
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gridGap: "10px",
      }}
    >
      <div style={{ display: "grid", marginLeft: "20px", textAlign: "left" }}>
        <img
          src={about}
          alt="about"
          style={{ height: "46px", marginLeft: "20px" }}
        />
        <h4
          style={{
            color: "#3498db",
            textAlign: "initial",
            margin: "3px 0 0 20px",
          }}
        >
          Who are we ?
        </h4>

        <div style={{ marginLeft: "20px", overflow: "hidden" }}>
          <h3>
            We are your digital partner for innovative design and reliable Web,
            Mobile and Marketing solutions.
          </h3>
          <p>
            The top-notch and preeminent Web and Mobile App Development Company
            of India with its global presence in USA, Mind Inventory is
            first-rate choice of the clients worldwide. With sheer customer
            satisfaction in mind, we are profoundly dedicated to developing
            highly intriguing apps that strictly meet the business requirements
            and catering a wide spectrum of projects.
          </p>
          <button type="button" class="btn btn-primary">
            Contact Us
          </button>
        </div>
      </div>
      <div>
        <img
          src={all}
          alt="alltogether"
          style={{
            height: "200px",
            width: "200px",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
