import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import profile from "../images/profilee.png";
import youtube from "../images/youtube.png";

const Tesimonials = () => {
  return (
    <div>
      <div>
        <h4 style={{ color: "grey", fontSize: "24px" }}>TESTIMONIALS</h4>
        <h3>OUR HAPPY CLIENT SAY</h3>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gridGap: "20px ",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            textAlign: "left",
            marginTop: "38px",
            marginLeft: "75px",
          }}
        >
          <span>
            <img
              src={profile}
              alt=""
              style={{ width: "100px", marginRight: "302px" }}
            />
            <button
              type="button"
              class="btn btn-primary btn-circle btn-sm"
              style={{ marginRight: "57px" }}
            >
              <ChevronLeftIcon />
            </button>
            <button type="button" class="btn btn-primary btn-circle btn-sm">
              <ChevronRightIcon />
            </button>
          </span>

          <p style={{ marginTop: "12px" }}>
            Lorem ipsum is simply dummy text of the printing & Typesetting
            industry. lorem ipsum has been the industry’s standard dummy text
            ever since the 1500s, an unknown printer took a gallery.
          </p>
          <h6>Harriet Mitchell</h6>
          <p>Director of inbrew</p>
        </div>
        <div>
          <img
            src={youtube}
            alt=""
            style={{ width: "250px", marginTop: "81px" }}
          />
        </div>
      </div>
      <div style={{ display: "grid", placeItems: "center", marginTop: "50px" }}>
        <div
          style={{ width: "70%", height: "210px", backgroundColor: "#001D4C" }}
        >
          <h4 style={{ color: "#fff", margin: "20px" }}>
            Let’s Create Big Stories Together
          </h4>
          <p style={{ color: "#fff", margin: "20px" }}>
            Mobile is in our nerves. We don’t just build apps, we create <br />
            brand.Choosing us will be your best decision.
          </p>
          <button
            type="button"
            class="btn btn-outline-light"
            style={{ margin: "20px" }}
          >
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tesimonials;
