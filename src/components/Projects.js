import React from "react"
import { Box, Grid } from "@mui/material"
import { PROJECTS } from "../navigation/sitemap"
import { makeStyles } from "@mui/styles"
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  projectImage: {
    width: "469px",
    height: "420px",
    zIndex: 9999,
    [theme.breakpoints.down("md")]: {
      width: 300,
    }
  },
  items: {
    [theme.breakpoints.up("md")]: {
      "&:nth-child(2)": {
        marginTop: 72,
      },
      "&:nth-child(2n + 1)": {
        marginTop: -72,
      },
      "&:nth-child(1)": {
        marginTop: "0px !important",
      },
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 0,
      marginTop: "0px !important"

    },
  },
  container: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}))

const Projects = ({ projects }) => {
  const classes = useStyles()
  return (
    <Box marginTop="55px">
      <Box maxWidth="844px" className={classes.container}>
        <Grid container spacing={2} justifyContent="center">
          {projects?.nodes?.map(el => (
            <Grid item xs={12} md={6} className={classes.items} key={el?.id}>
              <Link href={`${PROJECTS}/${el?.Key}`} >
                <a>
                <Box>
                  <Image
                    src={(el?.images[0]?.localFile)}
                    alt="alo"
                    className={classes.projectImage}
                  />
                </Box>
                </a>
              </Link>
            </Grid>
          ))}
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects
