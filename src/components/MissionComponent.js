import { Box, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import Image from "next/image"

import { makeStyles } from "@mui/styles"
import { faRocket, faEye, faAward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useTranslation } from "react-i18next"
import { useRouter } from "next/router"

const useStyles = makeStyles(theme => ({
  containerMain: {
    display: "flex",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    margin: "50px 0px",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0px",
  },
  container2: {
    display: "flex",
    height: "auto",
    width: "100%",
    flexDirection: "row",
    margin: "10px 0px",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  containerImage: {
    display: "flex",
    width: "5%",
    height: "auto",
    justifyContent: "center",
    [theme.breakpoints.between(1280, 1550)]: {
      width: "10%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      width: "15%",
    },
  },
  containerText: {
    display: "flex",
    height: "auto",
    width: "35%",
    flexDirection: "column",
    margin: "10px 0px",
    [theme.breakpoints.between(1280, 1550)]: {
      width: "40%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  backgroundImage: {
    padding: "15px",
    backgroundColor: "#27AAE1",
    borderRadius: "200px",
    display: "flex",
    alignContent: "center",
  },
  icon: {
    width: "35px",
    height: "35px",
    [theme.breakpoints.down("xl")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("md")]: {
      width: "27px",
      height: "27px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20px",
      height: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15px",
      height: "15px",
    },
  },
  title: {
    fontSize: "30px",
    fontFamily: "Nexa Bold",
    marginTop: "30px",
    color: "#193174",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  text1: {
    fontFamily: "HindVadodara",
    fontSize: "35px",
    color: "#193174",
    textAlign: "center",
    margin: "30px 0px",
    display: "flex",
    width: "43%",
    [theme.breakpoints.between(1280, 1550)]: {
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      fontSize: "22px",
    },
  },
  text2: {
    fontFamily: "HindVadodara",
    fontSize: "35px",
    color: "#193174",
    textAlign: "center",
    margin: "30px 0px",
    display: "flex",
    width: "43%",
    color: "#193174",
    [theme.breakpoints.between(1280, 1550)]: {
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      fontSize: "20px",
    },
  },
  text3: {
    fontStyle: "normal",
    fontFamily: "Roboto,sans-serif",
    fontSize: "20px",
    lineHeight: "25px",
    textAlign: "left",
    width: "40%",
    padding: "30px 0px",
    color: "#193174",
    [theme.breakpoints.between(1280, 1550)]: {
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      fontSize: "15px",
    },
  },
  subtitle: {
    fontSize: "25px",
    fontFamily: "Nexa Bold",
    marginTop: "23px",
    color: "#193174",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      marginTop: "0px",
      justifyContent: "center",
    },
  },
  text4: {
    fontStyle: "normal",
    fontFamily: "Roboto,sans-serif",
    fontSize: "20px",
    lineHeight: "25px",
    textAlign: "left",
    paddingTop: "20px",
    color: "#193174",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
}))

const dataToShow = {
  titleMission: "",
  descriptionMission: "",
  titleVission: "",
  subtitleVission: "",
  descriptionVission: "",
  titleValue: "",
}

const MissionComponent = ({ companyValue, missionPage }) => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const lang = i18n.language
  const [info] = useState(missionPage?.data || [])
  const [data, setData] = useState(dataToShow)

  const companyV = companyValue
  const CompanyFilter = companyV.filter(companyV =>
    companyV.locale.includes(lang)
  )

  const prepareData = info => {
    const mappedInfo = info.map(({ attributes }) => {
      return attributes
    })

    const filteredData = mappedInfo?.filter(item => item.locale.includes(lang))
    return filteredData
  }

  useEffect(() => {
    const data = prepareData(info)
    const obj = {
      titleMission: data[0].title_mission,
      descriptionMission: data[0].description_mission,
      titleVission: data[0].title_vission,
      subtitleVission: data[0].subtitle_vission,
      descriptionVission: data[0].description_vission,
      titleValue: data[0].title_company_value,
    }
    setData({ ...obj })
  }, [lang])

  const {
    titleMission,
    descriptionMission,
    titleVission,
    subtitleVission,
    descriptionVission,
    titleValue,
  } = data

  return (
    <Box className={classes.containerMain}>
      <Box className={classes.container}>
        <Box className={classes.backgroundImage}>
          <FontAwesomeIcon
            icon={faRocket}
            size="lg"
            color="#193174"
            className={classes.icon}
          />
        </Box>
        <Typography className={classes.title}>{titleMission}</Typography>

        <Typography className={classes.text1}>{descriptionMission}</Typography>
      </Box>

      <Box className={classes.container}>
        <Box className={classes.backgroundImage}>
          <FontAwesomeIcon
            icon={faEye}
            size="lg"
            color="#193174"
            className={classes.icon}
          />
        </Box>
        <Typography className={classes.title}>{titleVission}</Typography>

        <Typography className={classes.text2}>{subtitleVission}</Typography>

        <Typography className={classes.text3}>{descriptionVission}</Typography>
      </Box>

      <Box className={classes.container}>

        { CompanyFilter.length > 0 && 
          (<Box className={classes.backgroundImage}>
            <FontAwesomeIcon
              icon={faAward}
              size="lg"
              color="#193174"
              className={classes.icon}
            />
          </Box>)
          (<Typography className={classes.title}>{titleValue}</Typography>)
        }
        

        {CompanyFilter.map(e => {
          const ImageValue = e.image.data[0].attributes.url

          return (
            <Box className={classes.container2} key={e.id}>
              <Box className={classes.containerImage}>
                <Image
                  src={ImageValue}
                  width={80}
                  height={80}
                  alt="image-mision"
                  quality={100}
                />
              </Box>

              <Box className={classes.containerText}>
                <Typography className={classes.subtitle}>{e.title}</Typography>

                <Typography className={classes.text4}>
                  {e.description}
                </Typography>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default MissionComponent
