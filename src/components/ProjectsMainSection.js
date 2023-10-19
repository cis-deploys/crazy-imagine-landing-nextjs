import React from "react"
import { Box, Typography, Hidden } from "@mui/material"
import { PROJECTS } from "../navigation/sitemap"
import { makeStyles } from "@mui/styles"
import Link from "next/link"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down("lg")]: {
      marginLeft: 0,
      paddingLeft: 50,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      margin: "auto",
    },
  },
  title: {
    fontSize: 63,
    fontWeight: "bold",
    fontFamily: "Gotham",
    minWidth: 650,
    [theme.breakpoints.down("md")]: {
      minWidth: 0,
      textAlign: "center",
    },
  },
  boxImageBg: {
    backgroundColor: "#353fa3",
  },
  image: {
    marginRight: -605,
    marginTop: -170,
    height: 700,
    width: 900,
    [theme.breakpoints.down("lg")]: {
      marginRight: "0px",
      marginLeft: -500,
    },
  },
  seeMoreContainer: {
    backgroundColor: "#23aae1",
    color: "white",
    borderRadius: 30,
    boxShadow: "3.178px 6.237px 16px 0px rgba(15, 15, 15, 0.39)",
  },
  seeMore: {
    textTransform: "uppercase",
    fontSize: 15,
    fontFamily: "Gotham",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  resetLink: {
    color: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      color: "#ffffff",
      textDecoration: "none",
    },
  },
}))

const ProjectsMainSection = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     projects: allStrapiProjectsPage {
  //       nodes {
  //         mainTitle
  //         image {
  //           localFile {
  //             childImageSharp {
  //               gatsbyImageData(quality: 5, formats: [WEBP])
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  const project = data.projects.nodes[0]
  const image = project.image.localFile
  const classes = useStyles()
  return (
    <Box marginLeft="233px" marginBottom="-140px" className={classes.container}>
      <Box display="flex" justifyContent="center">
        <Box>
          <Typography className={classes.title}>{project.mainTitle}</Typography>
          <Box
            display={{ xs: "flex", md: "flex", lg: "block" }}
            justifyContent="center"
          >
            <Box
              width="142px"
              height="33px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              className={classes.seeMoreContainer}
              marginTop="28px"
            >
              <Link href={`${PROJECTS}#all`} className={classes.resetLink}>
                <a>
                <Typography className={classes.seeMore}>See more</Typography>
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          height="590px"
          width={{ md: "0px", lg: "100%" }}
          justifyContent="flex-end"
          zIndex="999"
        >
          <Hidden mdDown>
            <Image
              src={image}
              alt={project.mainTitle}
              className={classes.image}
            />
          </Hidden>
          <Hidden lgDown>
            <Box
              width="602px"
              height="590px"
              className={classes.boxImageBg}
            ></Box>
          </Hidden>
        </Box>
      </Box>
      <Box id="all" />
    </Box>
  )
}

export default ProjectsMainSection
