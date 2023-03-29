import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";

const toolbarStyles = {
  display: "flex",
  flexWrap: "nowrap",
};
const childStyle = {
  display: "flex",
  width: "25%",
  boxSizing: "borderBox",
  padding: "10px",
};

const Topbar = () => {
  return (
    <div>
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={toolbarStyles}>
            <div className="location" style={childStyle}>
              <LocationOnRoundedIcon
                style={{ fontSize: "1rem", padding: "3px" }}
              />
              <Typography style={{ fontSize: "0.7rem" }}>
                g-9,first Floor, Sector 63, Noida <span>|</span>
              </Typography>
            </div>
            <div className="email" style={childStyle}>
              <MailRoundedIcon style={{ fontSize: "1rem", padding: "3px" }} />
              <Typography style={{ fontSize: "0.7rem" }}>
                shubham@kusheldigi.com <span>|</span>
              </Typography>
            </div>
            <div className="phone" style={childStyle}>
              <CallRoundedIcon style={{ fontSize: "1rem", padding: "3px" }} />
              <Typography style={{ fontSize: "0.7rem" }}>9045301702</Typography>
            </div>

            <div className="timer" style={childStyle}>
              <TimerRoundedIcon style={{ fontSize: "1rem", padding: "3px" }} />
              <Typography style={{ fontSize: "0.7rem" }}>
                Office Hours 24 Hours
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Topbar;
