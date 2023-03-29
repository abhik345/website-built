import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "250px",
          backgroundColor: "#001D4C",
          color: "#fff",
        }}
      >
        <span style={{ color: "#fff", display: "flex", flexWrap: "wrap" }}>
          <img src={logo} alt="" />
          <span style={{ margin: "20px" }}>
            g-9,first Floor, Sector 63, Noida
          </span>
          <span style={{ margin: "20px" }}>
            g-9,first Floor, Sector 63, Noida
          </span>
          <span style={{ margin: "20px" }}>9045301702</span>
        </span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ display: "grid" }}>
            <span style={{ position: "relative", top: "90px" }}>
              © 2023 Kusheldigi. All rights reserved.
            </span>
            <span style={{ position: "relative", top: "103px" }}>
              About Us | Insights | Blog | Privacy Policy | Sitemap
            </span>
          </div>
          <div>
            <span style={{ position: "relative", top: "96px" }}>
              Follow Us On
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
