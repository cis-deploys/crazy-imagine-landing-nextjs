import React from "react"
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  heroContainer: {
    backgroundColor: "#304fd5",
  },
  imageContainer: {
    backgroundColor: "#27AAE1",
    display: "flex",
    justifyContent: "center",
    padding: "45px 0px",
    marginTop: "30px",
    maxHeight: "850px",
    width: '100%',
    height: '100%',
    [theme.breakpoints.down("md")]: {
      padding: "25px 43px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "25px 15px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "25px 15px",
    },
  },
}))

const HeroProjectsSection = ({ image, title }) => {
  const classes = useStyles()

  const dataImage = image.length > 1 ? image[1]?.url : image[0]?.url;

  return (
    <Box className={classes.imageContainer}>
      <Image src={dataImage} alt={title} width={1700} height={1000} priority/>
    </Box>
  )
}

export default HeroProjectsSection
