import React from "react"
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Image from 'next/image'
import Crazy from '../../public/crazy1.png'

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    gap: "150px",
    width: "100%",
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      height: "280px",
    },
  },
  img2: {
    marginTop: "auto",
    width: "100%",
    height: "100%",
  },
}))

const Imagen = () => {
  const classes = useStyles()

  return (
    <Box className={classes.img2}>
      <Image
        className={`${classes.img2}`}
        src={Crazy}
        alt="Imagen de la empresa"
      />
    </Box>
  )
}

export default Imagen
