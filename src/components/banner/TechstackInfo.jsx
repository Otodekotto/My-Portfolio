import { Box, Typography } from "@mui/material"
import { ReactComponent as JavascriptSVG } from "../../img/TechstackIcons/icons8-javascript.svg"
import { ReactComponent as CSharpSVG } from "../../img/TechstackIcons/icons8-c-sharp-logo-2.svg"
import { ReactComponent as ReactSVG } from "../../img/TechstackIcons/icons8-react-native.svg"
import { ReactComponent as AngularSVG } from "../../img/TechstackIcons/icons8-angular.svg"
import { ReactComponent as TailwindCssSVG } from "../../img/TechstackIcons/icons8-tailwindcss.svg"
import { ReactComponent as SQLSVG } from "../../img/TechstackIcons/icons8-microsoft-sql-server-48.svg"

const icons = {
  javascript: JavascriptSVG,
  "c-sharp-logo-2": CSharpSVG,
  "react-native": ReactSVG,
  angular: AngularSVG,
  tailwindcss: TailwindCssSVG,
  "microsoft-sql-server-48": SQLSVG,
}

export default function TechStackInfo() {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ justifyContent: "center", textAlign: "center" }}
    >
      <Typography
        variant="h4"
        gutterBottom
        fontFamily="Roboto Mono"
        marginRight={2}
        color="white"
      >
        Tech Stack|
      </Typography>
      {Object.entries(icons).map(([name, IconComponent], index) => (
        <IconComponent
          key={name}
          className={index % 2 === 0 ? "animate-bounce" : "animate-bounce2"}
        />
      ))}
    </Box>
  )
}
