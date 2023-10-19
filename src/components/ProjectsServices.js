import React from "react"
import { Box, Typography } from "@mui/material"
import MemberServices from "./MemberServices"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  title: {
    fontSize: 60,
    fontFamily: "Gotham",
    maxWidth: 715,
    textAlign: "center",
  },
  description: {
    fontWeight: "bold",
    fontSize: 20,
    maxWidth: 650,
    textAlign: "center",
    marginTop: 10,
  },
  boxLine: {
    backgroundColor: "black",
  },
})

const ProjectsServices = () => {
  const classes = useStyles()
  return (
    <Box
    display="flex"
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
    marginTop={{ xs: "40px", md:"250px" }}
    >
    <Box id="services" />
      <Typography className={classes.title}>
        Craft your ideas <br /> and bring them to LIFE
      </Typography>
      <Typography className={classes.description}>
        Our passion is to create solutions whitch could give that extra value to
        your product, service or to business in general
      </Typography>
      <Box height="64px" width="1px" className={classes.boxLine} my="76px" />
      <MemberServices />
    </Box>
  )
}

export default ProjectsServices
