import React from "react";
import imgAbout from "../images/imgAbout.png";

const About = () => {
  return (
    <div>
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gridGap: "10px",
          backgroundColor: "#ecf0f1",
        }}
      >
        <div className="aboutpage">
          <div style={{ textAlign: "left", marginLeft: "40px" }}>
            <p>Welcome to Kushel Digi</p>
            <h2>
              Revolutionising your business <br /> through Technology.
            </h2>
            <p>We Are E-commerce Expert.</p>
          </div>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "25px",
            }}
          >
            <li
              style={{
                margin: "20px 28px 0 15px",
                fontWeight: "600",
                color: "grey",
              }}
            >
              SHOPIFY
            </li>
            <li
              style={{
                margin: "20px 28px 0 3px",
                fontWeight: "600",
                color: "grey",
              }}
            >
              WOO COMMERCE
            </li>
            <li
              style={{
                margin: "20px 21px 0 1px",
                fontWeight: "600",
                color: "grey",
              }}
            >
              BIG COMMERCE
            </li>
            <li
              style={{
                margin: "20px 4px 0 0",
                fontWeight: "600",
                color: "grey",
              }}
            >
              MAGENTO
            </li>
          </ul>
        </div>
        <div className="featured">
          <article>
            <img
              src={imgAbout}
              alt="featureimage"
              style={{ height: "250px", width: "250px" }}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
