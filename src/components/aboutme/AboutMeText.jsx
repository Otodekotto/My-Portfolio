import { Box, Typography, Container } from "@mui/material";
import CurvyLines from "../../img/appCurvyLines.png";

export default function AboutMeText() {
  return (
    <div id="about-me">
      <Box
        alignItems="center"
        sx={{
          justifyContent: "center",
          textAlign: "center",

          display: "flex",
          overflow: "hidden",
          bgcolor: "beige",
        }}
        component="section"
      >
        <Container sx={{ mt: 10, mb: 10, position: "relative" }}>
          <Box
            component="img"
            src={CurvyLines}
            alt="curvy lines"
            sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
          />

          <Typography
            variant="h3"
            gutterBottom
            fontFamily="Roboto Mono"
            color="blue"
          >
            About Me
          </Typography>
          <Typography variant="h4" gutterBottom fontFamily="Roboto Mono">
            A dedicated Software Developer!
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            I am a motivated individual who is constantly driven to grow and
            develop professionally in my field. I'm not afraid to explore new
            technologies and methods to enhance my skills and performance.
            Solving problems is part of my passion, and I believe that every
            challenge is an opportunity to achieve success.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
