import React, { useState } from "react"
import { Box, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import mainImage from "../../public/Group619.webp"
import Image from "next/image"
import { Flipper, Flipped } from "react-flip-toolkit"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    height: "100%",
    marginTop: "20px",
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    alignSelf: "flex-start",
    height: "100%",
    [theme.breakpoints.up("xl")]: {
      fontSize: "70px",
      lineHeight: "70px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      lineHeight: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
    "@media (max-width: 335px)": {
      fontSize: "19px",
      lineHeight: "19px",
    },
  },
  blueTitle2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "40px",
    lineHeight: "40px",
    color: "#27AAE1",
    alignSelf: "flex-start",
    marginTop: "7px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "50px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "31px",
      lineHeight: "31px",
      marginTop: "6px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "15px",
      marginTop: "5px",
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },

  imageContainer: {
    width: "100%",
    height: "auto",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    marginBottom: "8px",
    cursor: "pointer",
  },
  info: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    minHeight: "88px",
  },
  name: {
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "30px",
    color: "#091E7A",
    fontFamily: "Nexa Bold",
  },
  role: {
    fontWeight: 400,
    fontFamily: "HindVadodara",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#193174",
  },
  gridContainer: {
    maxWidth: "1400px",
    margin: "auto",
    padding: "32px",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  boxContentCardBack1: {
    paddingTop: "32px",
  },
  boxContentCardBack2: {
    marginTop: "16px",
  },
  descriptionCardBackText: {
    fontFamily: "HindVadodara",
    fontSize: "16px",
    lineHeight: "1.0rem",
    textAlign: "justify",
    fontWeight: 400,
    color: "#A4A4A6",
    whiteSpace: "break-spaces",
    letterSpacing: "0.02rem",
    [theme.breakpoints.down(475)]: {
      fontSize: "12px",
      lineHeight:"12px"
    
    },
  },
}))

const MeetTeamSection = ({ members }) => {
  // Ordenar los miembros, colocando primero al CEO y luego al COO
  const sortedMembers = [...members].sort((a, b) => {
    if (
      a.role.toLowerCase() === "Founder and Chief Executive Officer".toLowerCase() ||
      a.role.toLowerCase() === "Fundador y Director Ejecutivo".toLowerCase()
    )
      return -1
    if (
      b.role.toLowerCase() === "Founder and Chief Executive Officer".toLowerCase() ||
      b.role.toLowerCase() === "Fundador y Director Ejecutivo".toLowerCase()
    )
      return 1
    if (
      a.role.toLowerCase() === "Chief Operating Officer".toLowerCase() ||
      a.role.toLowerCase() === "Director de Operaciones".toLowerCase()
    )
      return -1
    if (
      b.role.toLowerCase() === "Chief Operating Officer".toLowerCase() ||
      b.role.toLowerCase() === "Director de Operaciones".toLowerCase()
    )
      return 1
    return a.name.localeCompare(b.name)
  })
  const classes = useStyles()
  const [flippedStates, setFlippedStates] = useState({})

  const handleMouseEnter = id => {
    setFlippedStates(prevState => ({
      ...prevState,
      [id]: true,
    }))
  }

  const handleMouseLeave = id => {
    setFlippedStates(prevState => ({
      ...prevState,
      [id]: false,
    }))
  }
  return (
    <Box>
      <Grid
        container
        className={classes.gridContainer}
        spacing={2}
      >
    
        {sortedMembers.map(member => (
          <Grid
            item
            className={classes.gridItem}
            key={member.id}
            xs={12}
            sm={6}
            md={6}
            lg={3}
          >
            <Box>
              <Flipper flipKey={JSON.stringify(flippedStates)}>
                <Flipped flipId={`box-${member.id}`}>
                  <Box
                    onMouseEnter={() => handleMouseEnter(member.id)}
                    onMouseLeave={() => handleMouseLeave(member.id)}
                    className={classes.imageContainer}
                  >
                    <Flipped inverseFlipId={`box-${member.id}`}>
                      <Box>
                        <Image
                          src={
                            member.avatar[0] ? member.avatar[0].url : mainImage
                          }
                          alt={member.name}
                          layout="responsive"
                          width={300}
                          height={350}
                          objectFit="cover"
                          className={classes.image}
                        />
                        <Box className={classes.info}>
                          <Typography className={classes.name}>
                            {member.name}
                          </Typography>
                          <Typography className={classes.role}>
                            {member.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Flipped>
                    <Flipped inverseFlipId={`box-${member.id}`}>
                      <Box
                        sx={{
                          width: "101%",
                          height: "100%",
                          position: "absolute",
                          top: 0,
                          left: -1,
                          backfaceVisibility: "hidden",
                          transformStyle: "preserve-3d",
                          transition: "transform 0.5s",
                          transform: flippedStates[member.id]
                            ? "rotateY(0deg)"
                            : "rotateY(-180deg)",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#fff",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            flexDirection: "column",
                            color: "#000",
                            padding: "16px",
                          }}
                        >
                          <Box className={classes.boxContentCardBack1}>
                            <Typography className={classes.name}>
                              {member.name}
                            </Typography>
                            <Typography className={classes.role}>
                              {member.role}
                            </Typography>
                          </Box>
                          <Box className={classes.boxContentCardBack2}>
                            <Typography
                              className={classes.descriptionCardBackText}
                            >
                              {member.cardDescription}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Flipped>
                  </Box>
                </Flipped>
              </Flipper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default MeetTeamSection
