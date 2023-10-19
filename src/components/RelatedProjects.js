import React, { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard } from "swiper/core"
import { PROJECTS } from "../navigation/sitemap"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import Link from "next/link"

const useStyes = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    width: "380px",
    height: "fit-content",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      height: "inherit",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "13px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#193174",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "16px",
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
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "19px",
    padding: "26px 25px 32px 37px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "13px",
      padding: "18px 18px 16px 26px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
      padding: "11px 11px 10px 16px",
    },
  },
  img: {
    backgroundColor: "#27AAE1",
    height: "210px",
    [theme.breakpoints.down("md")]: {
      height: "147px",
    },
  },
  slider: {
    width: "100%",
    boxSizing: "content-box",
    [theme.breakpoints.between(0, 600)]: {
      width: "65%",
    },
  },
  slide: {
    [theme.breakpoints.between(0, 400)]: {
      width: "75%",
    },
  },
  carousel: {
    height: "400px",
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
  },
}))

const RelatedProjects = ({ bulletClass, projects }) => {
  const classes = useStyes()
  const { i18n, t } = useTranslation()
  const lang = i18n.language 

        return (
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 4,
              },
              1920: {
                slidesPerView: 5
              }
            }}
            pagination={{
              clickable: true,
            }}
            keyboard={{ enabled: true }}
            grabCursor={true}
            modules={[Pagination]}
            className={`${classes.slider} ${bulletClass}`}
          >
            {
              projects
              ?.filter(projects => projects?.locale?.includes(lang))
              ?.filter((project) => project.title !== null )
              ?.map((el, index) => (

              <SwiperSlide key={index} className={classes.slide}>
                <Box className={classes.container}>
                  <>
                  <Box
                    style={{ backgroundImage: `url(${el?.images[0]?.url?.publicURL})`, objectFit: "contain", backgroundSize: "cover", backgroundPosition: "top center", height: "250px", width: "100%" }} />
                  <Box className={classes.textContainer}>
                    <Typography className={classes.title}>
                      {el?.title}
                    </Typography>
                    <Link href={`${PROJECTS}/${el?.Key}`}>
                      <a className={classes.link}>
                      {t("common_lastestPosts_blogPost_button_readMore")}
                      </a>
                    </Link>
                  </Box>
                  </>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      }

export default RelatedProjects
