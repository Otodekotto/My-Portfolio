import * as React from "react"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jonas D. Portfolio
          </Typography>
          <Button color="inherit">About Me</Button>
          <Button color="inherit">Project</Button>
          <Button color="inherit">Contact Me</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
