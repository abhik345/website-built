import React from "react";
import port from "../images/ourportfolio.png";
import { Card, CardContent } from "@mui/material";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Portfoli2nd = () => {
  return (
    <div>
      <div>
        <img
          src={port}
          alt="portfolio"
          style={{ height: "46px", marginLeft: "20px" }}
        />
        <h2 style={{ fontWeight: "bold", marginTop: "10px", color: "grey" }}>
          OUR PORTFOLIO
        </h2>
        <p>
          We design project designed with <strong>passion</strong> on time,
          <br />
          within
          <strong> budget</strong> of full value
        </p>
      </div>
      <div style={{ display: "grid", gridGap: "40px" }}>
        <Card style={{ gridColumn: "1/3" }}>
          <img
            src={img1}
            alt="img1"
            style={{ height: "350px", width: "450px" }}
          />
          <CardContent>
            <h5>www.2ndAmendment.com</h5>
            <p>Lorem Ipsum is simply dummy</p>
          </CardContent>
        </Card>
        <Card style={{ gridColumn: "3/5" }}>
          <img
            src={img2}
            alt="img2"
            style={{ height: "350px", width: "450px" }}
          />
          <CardContent>
            <h5>www.kickeez.com</h5>
            <p>Lorem Ipsum is simply dummy</p>
          </CardContent>
        </Card>
        <Card style={{ gridColumn: "1/3" }}>
          <img
            src={img3}
            alt="img3"
            style={{ height: "350px", width: "450px" }}
          />
          <CardContent>
            <h5>www.protrucks.com</h5>
            <p>Lorem Ipsum is simply dummy</p>
          </CardContent>
        </Card>
        <Card style={{ gridColumn: "3/5" }}>
          <img
            src={img4}
            alt="img4"
            style={{ height: "350px", width: "450px" }}
          />
          <CardContent>
            <h5>www.jonesbuilt.com</h5>
            <p>Lorem Ipsum is simply dummy</p>
          </CardContent>
        </Card>
        <Card style={{ gridColumn: "1/3" }}>
          <img
            src={img5}
            alt="img5"
            style={{ height: "350px", width: "450px" }}
          />
          <CardContent>
            <h5>www.protrucks.com</h5>
            <p>Lorem Ipsum is simply dummy</p>
          </CardContent>
        </Card>
        <Card style={{ gridColumn: "3/5" }}>
          <img
            src={img6}
            alt="img6"
            style={{ height: "350px", width: "450px" }}
          />
          <CardContent>
            <h5>www.protrucks.com</h5>
            <p>Lorem Ipsum is simply dummy</p>
          </CardContent>
        </Card>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        style={{ marginTop: "16px" }}
      >
        View All Project
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};

export default Portfoli2nd;
