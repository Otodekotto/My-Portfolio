import { Typography, Box, Paper } from "@mui/material";
import ProjectCards from "../components/project/ProjectCards";
import BannerBackgroundImg from "../img/BannerBackground.jpg";

const Project = () => {
  return (
    <div
      id="project"
      style={{
        backgroundImage: `url(${BannerBackgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          textAlign: "center",
          marginTop: 5,
        }}
      >
        <Paper
          sx={{
            display: "inline-block",
            background: "rgba(0, 0, 0, 0.3)",
            marginRight: 0,
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            fontFamily="Roboto Mono"
            color="White"
          >
            Project
          </Typography>
        </Paper>
        <ProjectCards></ProjectCards>
      </Box>
    </div>
  );
};

export default Project;
