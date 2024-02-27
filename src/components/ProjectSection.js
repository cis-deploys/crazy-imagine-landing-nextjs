import React, { useState, useEffect } from "react"
import { Box, Typography, Button } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard } from "swiper/core"
import { PROJECTS } from "../navigation/sitemap"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { makeStyles } from "@mui/styles"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/swiper-bundle.css"
import Image from "next/image"
import { StyleComponent } from "./StyleComponent"
import Loading from "./Loading"

const useStyles = makeStyles(theme => ({
  container: {
    height: "fit-content",
    padding: "30px 60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.between(3000, 4000)]: {
      height: "800px",
      padding: "10px 200px",
    },
    [theme.breakpoints.between(2301, 2999)]: {
      height: "780px",
      padding: "10px 205px",
    },
    [theme.breakpoints.between(1920, 2300)]: {
      height: "780px",
      padding: "10px 48px",
    },
    [theme.breakpoints.between(1700, 1919)]: {
      height: "700px",
      padding: "10px 48px",
    },
    [theme.breakpoints.between(1280, 1700)]: {
      height: "600px",
      padding: "10px 48px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "600px",
      padding: "20px 40px",
    },
    [theme.breakpoints.down("md")]: {
      height: "520px",
      padding: "0px 43px",
    },
    [theme.breakpoints.between(381, 470)]: {
      height: "500px",
      padding: "0px 43px",
    },
    [theme.breakpoints.between(0, 380)]: {
      height: "500px",
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
    [theme.breakpoints.between(1951, 4000)]: {
      width: "500px",
      height: "410px",
    },
    [theme.breakpoints.between(1501, 1950)]: {
      width: "450px",
      height: "350px",
    },
    [theme.breakpoints.between(1280, 1500)]: {
      width: "450px",
      height: "300px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "360px",
      height: "250px",
    },
    [theme.breakpoints.down("md")]: {
      width: "350px",
      height: "260px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      height: "260px",
    },
  },
  titleCarousel: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "20px",
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
    height: "550px",
    alignItems: "center",
    transform: "scale(1)",
    [theme.breakpoints.between(1281, 1920)]: {
      height: "430px",
    },
    [theme.breakpoints.between(901, 1280)]: {
      height: "380px",
    },
    [theme.breakpoints.between(550, 900)]: {
      height: "360px",
    },
    [theme.breakpoints.between(400, 549)]: {
      height: "370px",
    },
    [theme.breakpoints.between(200, 400)]: {
      height: "360px",
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
  const classesComponent = StyleComponent()
  SwiperCore.use([Keyboard])
  const { t } = useTranslation("common")

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <Box className={classes.container}>
      <Typography
        className={classesComponent.titleBlue}
        style={{ marginTop: "30px" }}
      >
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
          },
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        loop={false}
        modules={[Pagination, Keyboard]}
        style={{
          width: "100%",
          boxSizing: "content-box",
          height: "auto",
        }}
        keyboard={{ enabled: true }}
        className={bulletClass}
      >
        {projects
          ?.filter(project => project.title !== null)
          ?.map((el, index) => {
            const dataImage = el?.images[0]?.url
            const titleProject = el?.title

            return (
              <SwiperSlide key={index} className={classes.slide}>
                <Box className={classes.carouselContainer}>
                  {isLoading && (
                    <Box
                      sx={{
                        display: "flex",
                        paddingTop: "50px",
                        alignItems: "center",
                        minWidth: "100px",
                        minHeight: "150px",
                      }}
                    >
                      <Loading />
                    </Box>
                  )}
                  {!isLoading && (
                    <>
                      <Image
                        src={dataImage}
                        alt={title}
                        width={350}
                        height="250px"
                        quality={100}
                        priority={false}
                      />
                      <Box className={classes.textContainer}>
                        <Typography className={classes.titleCarousel}>
                          {titleProject}
                        </Typography>
                        <Link
                          href={`${PROJECTS}/[Key].js`}
                          as={`${PROJECTS}/${el?.Key}`}
                        >
                          <a className={classes.link}>
                            {t("common_projectSection_button_viewProject")}
                          </a>
                        </Link>
                      </Box>
                    </>
                  )}
                </Box>
              </SwiperSlide>
            )
          })}
      </Swiper>
      {btn && (
        <Link href={`${PROJECTS}`}>
          <a
            style={{
              textDecoration: "none",
              alignSelf: "center",
              marginBottom: "10px",
            }}
          >
            <Button className={classesComponent.buttonComponent}>
              <span>{t("home_projectSection_button")}</span>
            </Button>
          </a>
        </Link>
      )}
    </Box>
  )
}

export default ProjectSection
