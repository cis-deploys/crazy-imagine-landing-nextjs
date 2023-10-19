import React from "react"
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  container: {
    backgroundColor: "transparent",
  },
})

const Sidebar = ({ children }) => {
  const classes = useStyles()
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      width={{
        md: "320px",
        lg: "460px",
      }}
      className={classes.container}
    >
      {children}
    </Box>
  )
}

export default Sidebar
