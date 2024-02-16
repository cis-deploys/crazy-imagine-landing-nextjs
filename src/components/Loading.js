import React from "react"
import { Box } from "@mui/material"
import Imagen from "../../public/LOGO.webp"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
    },
}))

const Loading = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <Image src={Imagen} alt="logo" loading="lazy" width={300} height={100} objectFit="contain" quality={100} />
        </Box>
    );
}

export default Loading;
