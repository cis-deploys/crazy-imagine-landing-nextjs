import React from "react"
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Image from "next/image"


const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    //gap: "150px",
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "280px",
    },
  },
  img2: {
    display: "flex",
    width: "100%",
    height: "auto",
    //objectFit: "contain",
    justifyContent: "end"
  },
}))

const Imagen = ({ imageUrl }) => {
  const classes = useStyles()

  return (
    <Box className={classes.img2}>
      {imageUrl && (
        <Image
          className={classes.img2}
          src={imageUrl}
          alt="Imagen de la empresa"
          width={3840}
          height={1398}
          quality={100}
        /> 
      )}
    </Box>
  );

 
}

export default Imagen

