import { Box, Typography, Container } from "@mui/material"
import CurvyLines from "../../img/appCurvyLines.png"

export default function AboutMeText() {
  return (
    <div>
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
        <Container sx={{ mt: 15, mb: 15, position: "relative" }}>
          <Box
            component="img"
            src={CurvyLines}
            alt="curvy lines"
            sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
          />

          <Typography variant="h4" gutterBottom fontFamily="Roboto Mono">
            About Me
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            "Hello! My name is Jonas Duong, and I'm a software developer with a
            passion for drawing and programming. I studied .Net Development at
            IT-Högskolan, where I gained a solid foundation in software
            development principles and techniques.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            During my time at IT-Högskolan, I had the opportunity to intern at
            Vision A Unity as a software developer and game developer. It was an
            incredible experience that allowed me to apply my skills in a
            professional setting. I had the chance to work with Unity, a popular
            game development platform, and created a game as part of my
            internship. It was a challenging and rewarding project that further
            fueled my enthusiasm for programming.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            I also worked on a desktop application during my internship. This
            project allowed me to explore different aspects of software
            development, from user interface design to implementing
            functionality.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            Currently I'm working as a Fullstack developer at Experis Academy,
            expanding expertise in React, JavaScript, Angular, and honing skills
            in C# and SQL.
          </Typography>
        </Container>
      </Box>
    </div>
  )
}
