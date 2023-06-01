import { Grid, Box } from "@mui/material"
import TypeOutText from "../components/banner/TypeOutText"
import TechStackInfo from "../components/banner/TechstackInfo"
import BannerBackgroundImg from "../img/BannerBackground.jpg"
import MoonImg from "../img/Moon.png"

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BannerBackgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: 2,
          justifyContent: "center",
          textAlign: "center",
          mt: 15,
        }}
      >
        <Grid item xs={8}>
          <TypeOutText />
        </Grid>
        <Grid
          item
          xs={4}
          className="flex items-center justify-center"
          marginTop={2}
        >
          <Box
            className="animate-spin w-40 h-40"
            component="img"
            src={MoonImg}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <TechStackInfo></TechStackInfo>
        </Grid>
      </Grid>
    </div>
  )
}

export default Banner
