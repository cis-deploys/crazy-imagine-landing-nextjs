import React from "react"
import { Box, Typography } from "@mui/material"
import  BgImage  from "../../public/gbimage-bridge"
import ProjectCatalog from "./ProjectCatalog"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  bgImage: {
    height: 2200,
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  title: {
    color: "white",
    fontSize: 63,
    fontFamily: "Gotham",
    marginBottom: 38,
    textTransform: "uppercase",
    paddingTop: 160,
  },
  description: {
    color: "white",
    fontSize: 22,
    fontFamily: "Poppins",
  },
  bgImageTitle: {
    width: "100% !important",
    height: "656px !important",
  },
}))

const OurProjects = ({ projects }) => {
  const classes = useStyles()

        return (
          <Box>
            <Image
              src={bgImage}
              tag={project?.title}
              className={classes.bgImage}
              alt="BgImage"
            >
              <Image
                src={bgImageTitle}
                tag="title"
                className={classes.bgImageTitle}
                alt="bgImageTitle"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="flex-end"
                  height="75%"
                >
                  <Box textAlign="center" maxWidth="922px">
                    <Typography className={classes.title}>
                      {project?.title}
                    </Typography>
                    <Typography className={classes.description}>
                      {project?.description}
                    </Typography>
                  </Box>
                </Box>
              </Image>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop="-175px"
              >
                <ProjectCatalog projects={ projects }/>
              </Box>
            </Image>
          </Box>
        )
  }

// const query = graphql`
//   query {
//     projects: allStrapiProjectsPage {
//       nodes {
//         title: ourProjectsTitle
//         description: outProjectsDescription
//         bgImage: ourProjectsImage {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 layout: FULL_WIDTH
//                 placeholder: BLURRED
//                 quality: 5
//                 formats: [WEBP]
//               )
//             }
//           }
//         }
//         bgImageTitle: imageTitle {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 layout: FULL_WIDTH
//                 placeholder: BLURRED
//                 quality: 5
//                 formats: [WEBP]
//               )
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default OurProjects
