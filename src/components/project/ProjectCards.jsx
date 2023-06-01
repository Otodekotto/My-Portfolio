import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import PokemonTrainer from "../../img/PokemonTrainer.png";
import MefitBackend from "../../img/ERDMefit.png";
import MefitFrontEnd from "../../img/MefitFrontEnd.png";

export default function ProjectCards() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          textAlign: "center",
          mt: 15,
          mb: 15,
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={PokemonTrainer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pokemon Trainer App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The website, developed using Angular, allows users to enter their
              Trainer Name and embark on an exciting journey of catching
              Pokémon. Leveraging the power of Vercel, the website is
              efficiently deployed to provide a seamless and responsive user
              experience.
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                handleClick(
                  "https://github.com/Otodekotto/ng-Assignment-Pokemon-Trainer"
                )
              }
            >
              Github
            </Button>
            <Button
              size="small"
              onClick={() =>
                handleClick(
                  "https://ng-assignment-pokemon-trainer.vercel.app/login"
                )
              }
            >
              Website
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={MefitFrontEnd}
            alt="Chevrolet"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MeFit Frontend
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The web application, built with React, offers users a convenient
              platform to organize and structure their weekly workout routines.
              By leveraging Keycloak, the website ensures seamless user
              registration and authentication, enhancing the overall user
              experience.
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                handleClick(
                  "https://github.com/AdamNymanExperis/mefit_frontend"
                )
              }
            >
              Github
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={MefitBackend} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MeFit Frontend Backend
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The backend of MeFit is developed using C# .NET, ensuring
              robustness and reliability. It effectively communicates with the
              frontend and securely stores and transmits data to and from the
              database.
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                handleClick("https://github.com/AdamNymanExperis/mefit_backend")
              }
            >
              Github
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
