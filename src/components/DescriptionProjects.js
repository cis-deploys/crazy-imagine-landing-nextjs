import React from "react"
import { Box } from "@mui/material"
import ReactMarkdown from "react-markdown"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  description: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#787878",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      fontSize: "16px",
      lineHeight: "20px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px",
    [theme.breakpoints.down("md")]: {
      padding: "75px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "75px 45px 75px 45px",
    },
  },
}))

const DescriptionProjects = ({ description }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <ReactMarkdown className={classes.description}>
        {description}
      </ReactMarkdown>
    </Box>
  )
}

export default DescriptionProjects
