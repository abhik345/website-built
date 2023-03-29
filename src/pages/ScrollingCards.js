import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import andriod from "../images/android.png";
import apple from "../images/apple.png";
import reactnative from "../images/react.png";
import flutter from "../images/flutter.png";
import appDev from "../images/download.png";
import webdev from "../images/webdevel.png";
import php from "../images/php.png";
import wordpress from "../images/wordpress.png";
import drupal from "../images/Drupal.png";
import laravel from "../images/laveral.png";
import ecom from "../images/ecoome.png";
import bigcom from "../images/bigcom.png";
import shopify from "../images/shopify.png";
import magneto from "../images/magneto.png";
import woocom from "../images/woocom.png";
import uiux from "../images/uiux.png";
import figma from "../images/figma.png";
import xd from "../images/xd.png";
import ai from "../images/ai.png";
import photoshop from "../images/photoshop.png";
import sketch from "../images/sketch.png";
import "../pages/scr.css";
const cardStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridGap: "10px",
};

const ScrollingCards = () => {
  return (
    <div style={{ flexGrow: " 1", padding: "16px" }}>
      <div style={{ display: "grid" }}>
        <Typography variant="h4">
          <span style={{ fontWeight: "bold" }}>Our</span> Services
        </Typography>
        <Typography variant="p" style={{ padding: "14px 241px 12px 244px" }}>
          We employ quality design and development techniques as a foundation
          for the structured and systematic rapid development of cutting-edge
          technology solutions.
        </Typography>
      </div>
      <div style={cardStyle}>
        <Card>
          <CardContent>
            <Typography className="heading">
              <img src={appDev} alt="appdev" />
              <span style={{ fontWeight: "bold" }}>
                App <br /> Development
              </span>
            </Typography>
            <ul>
              <li style={{ listStyleType: "none" }}>
                <img src={andriod} alt="andriod" />
                <span>Andriod App</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={apple} alt="apple" />
                <span>iOS App</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={reactnative} alt="react" />
                <span>React Native</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={flutter} alt="flutter" />
                <span>flutter</span>
              </li>
              <li style={{ listStyleType: "none", visibility: "hidden" }}>
                <img src={magneto} alt="flutter" />
                <span>Adobe Photoshop</span>
              </li>
            </ul>
            <button
              variant="container"
              style={{
                backgroundColor: "#3C83CB",
                display: "flex",
                textAlign: "left",
                color: "#fff",
              }}
              type="button"
              class="btn btn-primary"
            >
              Read More <KeyboardArrowRightIcon />
            </button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography className="heading">
              <img src={webdev} alt="appdev" style={{ width: "44px" }} />
              <span style={{ fontWeight: "bold" }}>
                Web <br /> Development
              </span>
            </Typography>
            <ul>
              <li style={{ listStyleType: "none" }}>
                <img src={php} alt="andriod" />
                <span>PHP</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={wordpress} alt="apple" />
                <span>Wordpress</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={drupal} alt="react" />
                <span>Drupal</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={laravel} alt="flutter" />
                <span>Laravel</span>
              </li>
              <li style={{ listStyleType: "none", visibility: "hidden" }}>
                <img src={magneto} alt="flutter" />
                <span>Adobe Photoshop</span>
              </li>
            </ul>
            <button
              variant="container"
              style={{
                backgroundColor: "#3C83CB",
                display: "flex",
                textAlign: "left",
                color: "#fff",
              }}
              type="button"
              class="btn btn-primary"
            >
              Read More <KeyboardArrowRightIcon />
            </button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography className="heading">
              <img src={ecom} alt="appdev" style={{ width: "44px" }} />
              <span style={{ fontWeight: "bold" }}>
                Ecommerce <br /> Development
              </span>
            </Typography>
            <ul>
              <li style={{ listStyleType: "none" }}>
                <img src={bigcom} alt="andriod" />
                <span>Bigcommerce</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={shopify} alt="apple" />
                <span>Shopify</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={woocom} alt="react" />
                <span>Woo Commerce</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={magneto} alt="flutter" />
                <span>Magento</span>
              </li>
              <li style={{ listStyleType: "none", visibility: "hidden" }}>
                <img src={magneto} alt="flutter" />
                <span>Adobe Photoshop</span>
              </li>
            </ul>
            <button
              variant="container"
              style={{
                backgroundColor: "#3C83CB",
                display: "flex",
                textAlign: "left",
                color: "#fff",
              }}
              type="button"
              class="btn btn-primary"
            >
              Read More <KeyboardArrowRightIcon />
            </button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography className="heading">
              <img src={uiux} alt="appdev" style={{ width: "44px" }} />
              <span style={{ fontWeight: "bold" }}>UI & UX</span>
            </Typography>
            <ul>
              <li style={{ listStyleType: "none" }}>
                <img src={figma} alt="andriod" />
                <span>Figma</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={xd} alt="apple" />
                <span>Adobe XD</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={sketch} alt="react" />
                <span>Sketch</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={ai} alt="flutter" />
                <span>Adobe illustrator</span>
              </li>
              <li style={{ listStyleType: "none" }}>
                <img src={photoshop} alt="flutter" />
                <span>Adobe Photoshop</span>
              </li>
            </ul>
            <button
              variant="container"
              style={{
                backgroundColor: "#3C83CB",
                display: "flex",
                textAlign: "left",
                color: "#fff",
              }}
              type="button"
              class="btn btn-primary"
            >
              Read More <KeyboardArrowRightIcon />
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScrollingCards;
