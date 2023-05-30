import { Box, Typography } from "@mui/material"

export default function AboutMeText() {
  return (
    <div>
      <Box
        alignItems="center"
        sx={{ justifyContent: "center", textAlign: "center", marginTop: 2 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          fontFamily="Roboto Mono"
          marginRight={2}
        >
          About Me
        </Typography>
        <Typography>
          "Hello! My name is Jonas Duong, and I'm a software developer with a
          passion for drawing and programming. I studied .Net Development at
          IT-Högskolan, where I gained a solid foundation in software
          development principles and techniques. During my time at IT-Högskolan,
          I had the opportunity to intern at Vision A Unity as a software
          developer and game developer. It was an incredible experience that
          allowed me to apply my skills in a professional setting. I had the
          chance to work with Unity, a popular game development platform, and
          created a game as part of my internship. It was a challenging and
          rewarding project that further fueled my enthusiasm for programming
        </Typography>
        <Typography>
          During my time at IT-Högskolan, I had the opportunity to intern at
          Vision A Unity as a software developer and game developer. It was an
          incredible experience that allowed me to apply my skills in a
          professional setting. I had the chance to work with Unity, a popular
          game development platform, and created a game as part of my
          internship. It was a challenging and rewarding project that further
          fueled my enthusiasm for programming.
        </Typography>
        <Typography>
          I also worked on a desktop application during my studies. This project
          allowed me to explore different aspects of software development, from
          user interface design to implementing functionality.
        </Typography>
        <Typography>
          Currently working as a Fullstack developer at Experis Academy,
          expanding expertise in React, JavaScript, Angular, and honing skills
          in C# and SQL.
        </Typography>
      </Box>
    </div>
  )
}
