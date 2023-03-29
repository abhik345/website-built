import React from "react";
import { Typography } from "@mui/material";
import woocom from "../images/woocom.png";
import magneto from "../images/magneto.png";
import bigcom from "../images/bigcom.png";
import shopify from "../images/shopify.png";
import wordpress from "../images/wordpress.png";
import { Card, CardContent } from "@mui/material";

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: "#ecf0f1" }}>
      <div style={{ display: "grid" }}>
        <Typography variant="h4">
          <span style={{ fontWeight: "bold" }}>TECHNOLOGIES</span> WE WORK WITH
        </Typography>
        <Typography variant="p" style={{ padding: "14px 241px 12px 244px" }}>
          Kusheldigi is evolving into an international contender in software
          engineering, with broad expertise in all areas required for credible
          software development.
        </Typography>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gridGap: "80px",
          margin: "60px",
        }}
      >
        <Card>
          <CardContent>
            <img src={woocom} alt="woocom" style={{ padding: "8px" }} />
            <Typography>Woo Commerce</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <img src={bigcom} alt="bigcom" style={{ padding: "8px" }} />
            <Typography>Big Commerce</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <img src={shopify} alt="shopify" style={{ padding: "15px" }} />
            <Typography>Shopify</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <img src={magneto} alt="magneto" style={{ padding: "10px" }} />
            <Typography>Magento</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <img src={wordpress} alt="wordpress" style={{ padding: "15px" }} />
            <Typography>wordpress</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
