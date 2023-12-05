import React, { useRef, useState, useEffect } from "react"
import { Box, Typography, Button } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard } from "swiper/core"
import { PROJECTS } from "../navigation/sitemap"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useIntersection } from "../hooks/useIntersection"
import { makeStyles } from "@mui/styles"
import "../styles/Swiper.module.css"
import "../styles/swiper-bullet.module.css"
import "swiper/css"
import "swiper/css/pagination"
import 'swiper/swiper-bundle.css';
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  container: {
    height: "fit-content",
    padding: "30px 60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.between(1951, 3000)]: {
      height: "900px",
      padding: "10px 205px",
    },
    [theme.breakpoints.between(1280, 1950)]: {
      height: "750px",
      padding: "10px 48px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "600px",
      padding: "20px 40px",
    },
    [theme.breakpoints.down("md")]: {
      height: "550px",
      padding: "30px 43px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "580px",
      padding: "0px 43px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "480px",
      padding: "0px 43px",
    },
  },
  carouselContainer: {
    boxShadow: "2px 3px 12px 2px rgba(0, 0, 0, 0.1)",
    borderRadius: "14px",
    width: "max-content",
    height: "fit-content",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.between(1951, 3000)]: {
      width: "500px",
      height: "420px"
    },
    [theme.breakpoints.between(1280, 1950)]: {
      width: "450px",
      height: "350px"
    },
    [theme.breakpoints.down("lg")]: {
      width: "360px",
      height: "250px"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      width: "350px",
      height: "260px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      width: "350px",
      height: "260px",
    },
  },
  titleCarousel: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px",
    color: "#193174",
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px",
      lineHeight: "18px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "22px",
      lineHeight: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: "18px",
      fontSize: "18px",
      lineHeight: "18px",
      width: "90%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    [theme.breakpoints.between(0, 300)]: {
      fontWeight: "18px",
      fontSize: "18px",
      lineHeight: "18px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "12px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    textDecoration: "none",
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      lineHeight: "11px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
      lineHeight: "9px",
    },
  },
  slide: {
    height: "500px",
    alignItems: "center",
    transform: "scale(1)",
    [theme.breakpoints.between(1201, 1280)]: {
      height: "270px",
    },
    [theme.breakpoints.between(901, 1200)]: {
      height: "250px",
    },
    [theme.breakpoints.between(550, 900)]: {
      height: "270px",
    },
    [theme.breakpoints.between(400, 549)]: {
      height: "350px",
    },
    [theme.breakpoints.between(200, 400)]: {
      height: "270px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    padding: "28px 0 38px 28px",
    backgroundColor: "white",
    [theme.breakpoints.down("lg")]: {
      gap: "15px",
      padding: "20px 0 27px 20px",
    },
    [theme.breakpoints.down("md")]: {
      gap: "15px",
      padding: "20px 0 27px 20px",
    },
  },
}))

const ProjectSection = ({ title, btn, size, projects, bulletClass }) => {
  const classes = useStyles({ btn })
  SwiperCore.use([Keyboard])
  const { i18n, t } = useTranslation()
  const lang = i18n.language

  const [projectDataAll, setProjectDataAll] = useState(projects.filter(project =>
    project.locale.includes(lang)
  ));
  
  useEffect(() => {
      setProjectDataAll(projects.filter(project =>
        project.locale.includes(lang)
      ));
  }, [i18n.language]);

      return (
        <Box className={classes.container}>
          <Typography className="title-blue">
            {title}
          </Typography>
          <Swiper
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
                },
              600: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1920: {
                slidesPerView: 4,
              }
            }}
            pagination={{
              clickable: true,
            }}
            slidesPerView={"auto"}
            grabCursor={true}
            loop={true}
            modules={[Pagination]}
            style={{
              width: "100%",
              boxSizing: "content-box",
              height: "auto"
            }}
            keyboard={{ enabled: true }}
            className={bulletClass}
          >

            { projectDataAll
              ?.filter((project) => project.title !== null )
              ?.map((el, index) => {
                const dataImage = el?.images[0]?.url //localFile
                const titleProject = el?.title


                return (
                  <SwiperSlide key={index} className={classes.slide}>
                    <Box className={classes.carouselContainer}>

                      <Image src={dataImage} alt={title} width={350} height="250px"/>

                      <Box className={classes.textContainer}>
                        <Typography className={classes.titleCarousel}>
                          {titleProject}
                        </Typography>
                        <Link href={`${PROJECTS}/[Key].js`} as={`${PROJECTS}/${el?.Key}`} >

                          <a className={classes.link}>
                          {t("common_projectSection_button_viewProject")}
                          </a>

                        </Link>
                      </Box>
                    </Box>
                  </SwiperSlide>
                )
              })}
            {btn && (
              <Link href={`${PROJECTS}`} >

                <a style={{ textDecoration: "none", alignSelf: "center", margin: "30px" }}>   
                <Button className="button-component">
                  <span>{t("home_projectSection_button")}</span>
                </Button>
                </a>

              </Link>
            )}
          </Swiper>
        </Box>
      )
}

export default ProjectSection