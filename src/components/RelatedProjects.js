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
import { StyleComponent } from "./StyleComponent"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    width: "420px",
    height: "350px",
    [theme.breakpoints.between(1921, 3000)]: {
      gap: "18px",
      height: "420px",
      width: "500px"
    },
    [theme.breakpoints.between(1281, 1920)]: {
      gap: "5px",
      height: "300px",
      width: "420px"
    },
    [theme.breakpoints.between(600, 1280)]: {
      gap: "5px",
      height: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "10px",
      height: "250px",
      width: "380px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#193174",
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": 3, /* number of lines to show */
    lineClamp: 3,
    "-webkit-box-orient": "vertical",
    "-moz-box-orient": "vertical",
    boxOrient: "vertical",
    height: "60px",
    textTransform: "uppercase",
    [theme.breakpoints.down("lg")]: {
      fontSize: "15px",
      lineHeight: "16px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
    [theme.breakpoints.between(0, 450)]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    marginTop: "auto",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "12px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    padding: "6px 25px 22px 27px",
    height: "100px",
    [theme.breakpoints.down("lg")]: {
      gap: "10px",
      padding: "18px 18px 16px 26px",
      height: "60px"
    },
    [theme.breakpoints.down("md")]: {
      gap: "10px",
      padding: "18px 18px 16px 26px",
      height: "70px"
    },
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
      padding: "11px 11px 10px 16px",
    },
  },
  img: {
    backgroundColor: "#27AAE1",
    with: "450px",
    height: "210px",
    [theme.breakpoints.down("md")]: {
      width: "387px",
      height: "147px",
    },
  },
  carousel: {
    height: "600px",
    alignItems: "center",
    transform: "scale(1)",
    [theme.breakpoints.between(1281, 1920)]: {
      height: "450px",
    },
    [theme.breakpoints.between(901, 1280)]: {
      height: "380px",
    },
    [theme.breakpoints.between(550, 900)]: {
      height: "360px",
    },
    [theme.breakpoints.between(400, 549)]: {
      height: "380px",
    },
    [theme.breakpoints.between(200, 400)]: {
      height: "360px",
    },
  },
}))

const RelatedProjects = ({ title, btn, size, projects, bulletClass }) => {
  const classes = useStyles({ btn })
  const classesComponent = StyleComponent()
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
                  <SwiperSlide key={index} className={classes.carousel}>
                    <Box ref={ref} className={classes.container}>

                      <Image src={dataImage} alt={title} width={350} height="250px"/>

                      <Box className={classes.textContainer}>
                        <Typography className={classes.title}>
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
                <Button className={classesComponent.buttonComponent}>
                  <span>{t("home_projectSection_button")}</span>
                </Button>
                </a>

              </Link>
            )}
          </Swiper>
      )
}

export default RelatedProjects