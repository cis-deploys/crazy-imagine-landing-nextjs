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
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    padding: "0px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("xl")]: {
      height: "800px",
      padding: "0px 43px",
    },
    [theme.breakpoints.down("md")]: {
      height: "500px",
      padding: "0px 43px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "430px",
      padding: "0px 15px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "420px",
      padding: "0px 15px",
    },
  },
  title: {
    visibility: "hidden",
  },
  title2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    marginTop: "84px",
    color: "#193173",
    marginBottom: "47px",
    [theme.breakpoints.up("lg")]: {
      fontWeight: "700",
      fontSize: "40px",
      lineHeight: "40px",
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: "28px",
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "55px",
      marginBottom: "33px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "22px",
      fontSize: "22px",
      lineHeight: "22px",
      marginTop: "34px",
      marginBottom: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      fontWeight: "22px",
      fontSize: "22px",
      lineHeight: "22px",
      marginTop: "34px",
      marginBottom: "0px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  button: props => ({
    display: props.btn ? "initial" : "none",
    background: "#797EF6",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    alignSelf: "center",
    marginBottom: "30px",
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "14px",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "14px 20px 12px 20px",
      marginTop: "50px",
      marginBottom: "60px",
      "& > span": {
        fontSize: "20px",
        lineHeight: "18px",
      },
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 14px 8px 14px",
      marginTop: "14px",
      "& > span": {
        fontSize: "9px",
        lineHeight: "10px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6px 9px 5px 9px",
      marginTop: "14px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
  }),
  carouselContainer: {
    boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "14px",
    width: "380px",
    height: "auto",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    objectFit: "contain",
    [theme.breakpoints.up("xl")]: {
      gap: "18px",
      width: "max-content"
    },
    [theme.breakpoints.down("lg")]: {
      gap: "10px",
      height: "230px",
      width: "max-content"
    },
    [theme.breakpoints.down("md")]: {
      gap: "10px",
      height: "210px",
      width: "max-content"
    },
    [theme.breakpoints.down("sm")]: {
      gap: "13px",
    },
  },
  titleCarousel: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px",
    color: "#193174",
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
      lineHeight: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: "15px",
      fontSize: "15px",
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
    height: "350px",
    alignItems: "center",
    transform: "scale(1)",
    [theme.breakpoints.between(1201, 1280)]: {
      height: "270px",
    },
    [theme.breakpoints.between(901, 1200)]: {
      height: "230px",
    },
    [theme.breakpoints.between(550, 900)]: {
      height: "225px",
    },
    [theme.breakpoints.between(400, 549)]: {
      height: "210px",
    },
    [theme.breakpoints.between(200, 400)]: {
      height: "250px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px 0px 38px 28px",
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      padding: "20px 0px 27px 20px",
    },
  },
}))

const ProjectSection = ({ title, btn, size, projects, bulletClass }) => {
  const classes = useStyles({ btn })
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
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
        <Box ref={ref} className={classes.container}>
          <Typography className={isVisible ? classes.title2 : classes.titleStyles}>
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
                slidesPerView: 5,
              }
            }}
            pagination={{
              clickable: true,
            }}
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

                      <Image src={dataImage} alt={title} width={538} height={252}/>

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

                <a style={{ textDecoration: "none", alignSelf: "center", marginBottom: "5px" }}>
                  
                <Button className={classes.button}>
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
