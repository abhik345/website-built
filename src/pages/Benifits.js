import React from "react";
import { Card, CardContent } from "@mui/material";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import GridViewIcon from "@mui/icons-material/GridView";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import solenoid from "../images/Solenoid.png";
import pro from "../images/Pro.png";
import auxible from "../images/auxible.png";
import pleasure from "../images/pleasure.png";
import AddIcon from "@mui/icons-material/Add";
const Benifits = () => {
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold", marginTop: "10px", color: "grey" }}>
          Benefits of Our e-commerce <br /> development
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <Card style={{ width: "30%", margin: "10px" }}>
          <CardContent>
            <span style={{ fontWeight: "bold" }}>Mobile-Friendly</span>
            <span style={{ marginLeft: "115px" }}>
              <MobileScreenShareIcon />
            </span>
            <p style={{ textAlign: "left" }}>
              Our ecommerce solutions deliver a seamless experience regardless
              of which device you browse it from at home or on the go
            </p>
          </CardContent>
        </Card>
        <Card style={{ width: "30%", margin: "10px" }}>
          <CardContent>
            <span style={{ fontWeight: "bold" }}>Scalable</span>
            <span style={{ marginLeft: "172px" }}>
              <AspectRatioIcon />
            </span>
            <p style={{ textAlign: "left" }}>
              Our ecommerce solutions are designed to handle the extra workload
              as your business grows smoothly and seamlessly.
            </p>
          </CardContent>
        </Card>
        <Card style={{ width: "30%", margin: "10px" }}>
          <CardContent>
            <span style={{ fontWeight: "bold" }}>Superior UI/UX</span>
            <span style={{ marginLeft: "49px" }}>
              <GridViewIcon />
            </span>
            <p style={{ textAlign: "left" }}>
              Pamper your customers with pleasing visuals, user friendly
              interfaces, and exciting experiences while browsing and shopping
              on your ecommerce site.
            </p>
          </CardContent>
        </Card>
        <Card style={{ width: "30%", margin: "10px" }}>
          <CardContent>
            <span style={{ fontWeight: "bold" }}>Smooth Deployment</span>
            <span style={{ marginLeft: "77px" }}>
              <AirplanemodeActiveIcon />
            </span>
            <p style={{ textAlign: "left" }}>
              Once we are done creating your online store, we will launch it for
              you without hassles, on the platform of your choice.
            </p>
          </CardContent>
        </Card>
        <Card style={{ width: "30%", margin: "10px" }}>
          <CardContent>
            <span style={{ fontWeight: "bold" }}>Technologically Advanced</span>
            <span style={{ marginLeft: "41px" }}>
              <MilitaryTechIcon />
            </span>
            <p style={{ textAlign: "left" }}>
              Our e-commerce experts are proficient in cutting edge technologies
              that they leverage to craft high octane solutions that exceed your
              expectations.
            </p>
          </CardContent>
        </Card>
      </div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "20px ",
          }}
        >
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            <h4>OUR ESSTEEMED CLIENTS</h4>
            <img src={pleasure} style={{ width: "200px" }} alt="12" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "20px ",
            }}
          >
            <img
              src={solenoid}
              alt=""
              style={{ width: "200px", marginTop: "30px" }}
            />
            <img src={pro} alt="" />
            <img src={auxible} alt="" style={{ width: "200px" }} />
            <img src={auxible} alt="" style={{ width: "200px" }} />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "20px ",
            marginTop: "20px",
          }}
        >
          <div style={{ textAlign: "left", margin: "20px" }}>
            <h2>JUST THE FAQs </h2>
          </div>
          <div style={{ textAlign: "left", display: "grid", gridGap: "10px" }}>
            <Card>
              <CardContent>
                <AddIcon style={{ color: "#619AD3" }} />
                <span>How much does a website consultant cost?</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <AddIcon style={{ color: "#619AD3" }} />
                <span>How much does a small website cost?</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <AddIcon style={{ color: "#619AD3" }} />
                <span>How much should I pay for website design?</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <AddIcon style={{ color: "#619AD3" }} />
                <span>How much does a basic 5 page website cost?</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <AddIcon style={{ color: "#619AD3" }} />
                <span>How long does a website take to build?</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <AddIcon style={{ color: "#619AD3" }} />
                <span>Is maintaining the website is costly?</span>
              </CardContent>
            </Card>
            <p>
              <a href="/" style={{ color: "grey", fontWeight: "bold" }}>
                See All FAQs
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
