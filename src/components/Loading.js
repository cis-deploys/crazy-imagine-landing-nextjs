import React from "react"
import { Box } from "@mui/material"
import Imagen from "../../public/LOGO.png"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        height: "auto",
        marginTop: "auto",
        display: "flex",
        justifyContent: "center",
        marginBottom: "auto",
        alignItems: "center",
        flexDirection: "column",
    },
    containerImage: {
        width: "500px",
        height: "500px",
        display: "flex",
        justifyContent: "center",
    },
    img2: {
        width: "140px",
        height: "73px",
        zIndex: "99999",
    },
    preloader: {
        width: "20px",
        height: "20px",
        border: "3px solid #eee",
        borderTop: "3px solid #666",
        borderRadius: "50%",
        animation: `$myEffect 2000ms infinite`,
    },
    "@keyframes myEffect": {
        "0%": {
            transform: "rotate(0)",
        },
        "100%": {
            transform: "rotate(360deg)",
        },
    },
}))

const Loading = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <Box className={classes.containerImage}>
            <Image src={Imagen} alt="logo" loading="lazy" className={classes.img2} />
            {/* <div className={classes.preloader}></div> */}
            </Box>
        </Box>
    );
}

export default Loading;
