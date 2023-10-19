import React from "react"
import { Box, Typography } from "@mui/material"
import { HOME } from "../navigation/sitemap"
import { makeStyles } from "@mui/styles"
import Image from "next/image"
import Link from "next/link"

const useStyles = makeStyles({
  bgImage: {
    width: 1124,
    height: 342,
    zIndex: 888,
  },
  title: {
    color: "white",
    fontSize: 38,
    lineHeight: 1.2,
  },
  titleBig: {
    fontFamily: "Gotham",
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  buyNowBox: {
    backgroundColor: "rgb(227, 100, 23)",
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
  },
  imageSecondary: {
    width: 255,
    height: 245,
    marginBottom: -125,
    zIndex: 999,
  },
  resetStyleLinks: {
    "&:hover": {
      textDecoration: "none",
    },
  },
})

const ProjectsContact = () => {
  const classes = useStyles()

        return (
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            marginTop="33px"
            marginBottom="-185px"
          >
            <Box display="flex" justifyContent="flex-end" width="690px">
              <Image
                src={imgCbz}
                alt="img"
                className={classes.imageSecondary}
              />
            </Box>
            <Image src={bgImg} alt="bgContact" className={classes.bgImage}>
              <Box
                diplay="flex"
                justifyContent="flex-start"
                paddingLeft="80px"
                py="30px"
                maxWidth="376px"
              >
                <Typography className={classes.title}>
                  If you have <br /> any question{" "}
                  <span className={classes.titleBig}>
                    FEEL FREE TO CONTACT US
                  </span>
                </Typography>
                <Link
                  href={`${HOME}#contact`}
                  className={classes.resetStyleLinks}
                >
                  <a>
                  <Box
                    width="208px"
                    height="50px"
                    boxShadow="3.178px 6.237px 16px 0px rgba(15, 15, 15, 0.39)"
                    borderRadius="17px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    marginTop="24px"
                    className={classes.buyNowBox}
                  >
                    Contact Us
                  </Box>
                  </a>
                </Link>
              </Box>
            </Image>
          </Box>
        )
        }

// const query = graphql`
//   query MyQuery {
//     projects: allStrapiProjectsPage {
//       nodes {
//         images: projectContactImg {
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
//         imageContact: imgContact {
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

export default ProjectsContact
