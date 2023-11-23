import * as React from "react";
import "animate.css";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="animate__animated animate__fadeInDown"
        sx={{ position: "fixed", top: 0, animationDelay: "500ms" }}
      >
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Typography
            variant="h6"
            component="div"
            className="animate__animated animate__fadeInLeft"
            sx={{ flexGrow: 1, animationDelay: "1000ms", marginRight: "10px" }}
          >
            Jonas D. Portfolio
          </Typography>
          <div style={{ display: "flex" }}>
            <Button
              color="inherit"
              className="animate__animated animate__fadeInLeft"
              onClick={() => scrollToSection("about-me")}
              style={{ animationDelay: "1600ms", marginRight: "10px" }}
            >
              About Me
            </Button>
            <Button
              color="inherit"
              className="animate__animated animate__fadeInLeft"
              onClick={() => scrollToSection("project")}
              style={{ animationDelay: "2000ms" }}
            >
              Project
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
