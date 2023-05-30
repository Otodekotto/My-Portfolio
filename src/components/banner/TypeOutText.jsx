import React, { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"

export default function TypeOutText() {
  const text = " A Fullstack Developer"
  const delay = 200
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timeoutId = null

    const typeText = (currentIndex) => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex])
        timeoutId = setTimeout(() => {
          typeText(currentIndex + 1)
        }, delay)
      } else {
        timeoutId = setTimeout(() => {
          setShowCursor(false)
          timeoutId = setTimeout(() => {
            setDisplayText("")
            setShowCursor(true)
            typeText(0) // Restart the typing effect
          }, 5000)
        }, delay)
      }
    }

    typeText(0)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [text, delay])

  return (
    <div>
      <Typography
        variant="h4"
        color="white"
        gutterBottom
        fontFamily="Roboto Mono"
      >
        Hello, I'm
      </Typography>
      <Box
        display="flex"
        sx={{ justifyContent: "center", textAlign: "center" }}
      >
        <Typography
          variant="h2"
          gutterBottom
          fontFamily="Dancing Script"
          marginRight={2}
          color="orange"
        >
          Jonas
        </Typography>
        <Typography
          variant="h2"
          color="orange"
          gutterBottom
          fontFamily="Dancing Script"
        >
          Duong
        </Typography>
      </Box>
      <Typography
        variant="h4"
        color="White"
        gutterBottom
        fontFamily="Roboto Mono"
      >
        {displayText}
        {showCursor && "|"}
      </Typography>
    </div>
  )
}
