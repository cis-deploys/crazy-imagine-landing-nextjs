import React from "react"
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Image from "next/image"
import Crazy from "../../public/crazyAniversario.webp"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    gap: "150px",
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "280px",
    },
  },
  img2: {
    marginTop: "auto",
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
}))

const Imagen = ({ imageUrl }) => {
  const classes = useStyles()

  const renderImage = () => {
    if (imageUrl) {
      return (
        <Image
          className={`${classes.img2}`}
          src={imageUrl}
          alt="Imagen de la empresa"
          layout="responsive"
          width={3840}
          height={2160}
          quality={100}
        />
      )
    } else {
      return (
        <Image
          className={classes.img2}
          src={Crazy}
          alt="Imagen de la empresa"
          layout="responsive"
          quality={100}
        />
      )
    }
  }

  return <Box className={classes.img2}>{renderImage()}</Box>
}

export default Imagen
