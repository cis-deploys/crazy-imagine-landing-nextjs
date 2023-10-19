import React, { useRef } from "react"
import { Box } from "@mui/material"
import DescriptionProjects from "../components/DescriptionProjects"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  galleryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "21px",
    [theme.breakpoints.down("md")]: {
      padding: "0 35px",
    },
    [theme.breakpoints.between(0, 600)]: {
      flexDirection: "column",
    },
  },
}))

const GalleryProjects = ({ gallery, description }) => {
  const classes = useStyles()
  const Ref1 = useRef()
  const Ref2 = useRef()
  const firstGallery = gallery.slice(2, 4)
  const secondGallery = gallery.slice(4)

  return (
    <>
      <Box ref={ Ref1 } className={classes.galleryContainer}>
        {firstGallery.map(({ url }) => (
          <Image
            src={(url)}
            style={{
              objectFit: "contain",
            }}
            width={530}
            height={300}
            alt={`image`}
          />
        ))}
      </Box>
      <DescriptionProjects description={description} />
      <Box ref={ Ref2 } className={classes.galleryContainer}>
        {secondGallery.map(({ url }) => (
          <Image
            src={(url)}
            style={{
              objectFit: "contain",
            }}
            width={530}
            height={300}
            alt={`image`}
          />
        ))}
      </Box>
    </>
  )
}

export default GalleryProjects
