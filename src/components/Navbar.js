import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import logo from "../images/logo.png";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";

import { useState } from "react";

const logoStyle = {
  flexGrow: 1,
  display: "grid",
  justifyItems: "start",
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar
        position="static"
        style={{
          background: "#fff",
          height: "58px",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography style={logoStyle}>
            <img src={logo} style={{ width: "30%" }} alt="logo" />
          </Typography>

          {/* <Button size="small" style={{ color: "grey" }}>
            About Us
          </Button> */}
          <Link to="/about-us" underline="none" component="button">
            <Button size="small" style={{ color: "grey" }}>
              About Us
            </Button>
          </Link>

          <Button size="small" style={{ color: "grey" }} onClick={handleClick}>
            Services
          </Button>
          <Menu
            id="dropdown-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            aria-controls="dropdown-menu"
            aria-haspopup="true"
          >
            <MenuItem onClick={handleClose}>Ecommerce Solution</MenuItem>
            <MenuItem onClick={handleClose}>
              Website Design & Development
            </MenuItem>
            <MenuItem onClick={handleClose}>Web Development</MenuItem>
          </Menu>
          <Button size="small" style={{ color: "grey" }}>
            Our Portfolio
          </Button>
          <Button size="small" style={{ color: "grey" }}>
            Blog
          </Button>
          <Button size="small" style={{ color: "grey" }}>
            Career
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: "5px" }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
