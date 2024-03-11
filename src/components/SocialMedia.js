import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faFacebook, faYoutube, faInstagram, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons'
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  contactIcon: {
    fontSize: "25px",
    color: "#A7E4F5",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  contactIconButton: {
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    flexWrap: "wrap",
    gap: "5px",
    [theme.breakpoints.down("xl")]: {
      gap: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "3px",
    },
  }
}))

export const SocialMedia = () => {
  const classes = useStyles()

  return (
    <Box className={classes.iconsContainer}>
      <a
        className={classes.contactIconButton}
        href="https://www.facebook.com/crazyimaginedev"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="2x" icon={faFacebook} className={classes.contactIcon}/>
      </a>
      <a
        className={classes.contactIconButton}
        href="https://twitter.com/CrazyImagineDev"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="2x" icon={faXTwitter} className={classes.contactIcon}/>
      </a>
      <a
        className={classes.contactIconButton}
        href="https://ve.linkedin.com/company/crazy-imagine-software"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="2x" icon={faLinkedin} className={classes.contactIcon}/>
      </a>
      <a
        className={classes.contactIconButton}
        href="https://instagram.com/crazyimaginedev?igshid=YmMyMTA2M2Y="
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="2x" icon={faInstagram} className={classes.contactIcon}/>
      </a>
      <a
        className={classes.contactIconButton}
        href="https://www.youtube.com/@crazyimaginedev"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="2x" icon={faYoutube} className={classes.contactIcon}/>
      </a>
        <a
        className={classes.contactIconButton}
        href="https://www.upwork.com/ag/crazyimagine"
        target="_blank"
        rel="noreferrer"
        >
        <FontAwesomeIcon size="2x" icon={faUpwork} className={classes.contactIcon}/>
      </a>
    </Box>
  )
}
