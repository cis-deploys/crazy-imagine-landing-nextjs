import React from "react"
import {  Box, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import SwiperCore, { Keyboard } from "swiper/core"
import { makeStyles } from "@mui/styles"
import { BLOG } from "../navigation/sitemap"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import 'swiper/swiper-bundle.css';

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
    [theme.breakpoints.up("xl")]: {
      gap: "18px",
      height: "fit-content",
      width: "max-content"
    },
    [theme.breakpoints.down("lg")]: {
      gap: "5px",
      height: "235px",
      width: "max-content"
    },
    [theme.breakpoints.down("md")]: {
      gap: "5px",
      height: "230px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "10px",
      height: "250px",
      width: "380px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "10px",
      height: "250px",
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
    //width:"100%",
    height: "60px",
    textTransform: "uppercase",
    [theme.breakpoints.down("lg")]: {
      fontSize: "15px",
      lineHeight: "16px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "16px",
    },
    [theme.breakpoints.down(300, 0)]: {
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
    gap: "19px",
    padding: "6px 25px 22px 27px",
    height: "100px",
    [theme.breakpoints.down("lg")]: {
      gap: "13px",
      padding: "18px 18px 16px 26px",
      height: "100px"
    },
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
    with: "450px",
    height: "210px",
    [theme.breakpoints.down("md")]: {
      width: "387px",
      height: "147px",
    },
  },
  slider: {
    width: "100%",
    boxSizing: "content-box",
    alignItems: "center",
  },
  carousel: {
    height: "600px",
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
      height: "250px",
    },
    [theme.breakpoints.between(200, 400)]: {
      height: "250px",
    },
  },
}))

const BlogPost = ({ bulletClass, articles: AllArticles }) => {
  const classes = useStyes()
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  SwiperCore.use([Keyboard])

  const articles = AllArticles
  const articlesFilter = articles?.filter(article =>
    article?.locale?.includes(lang)
  ) || []
  const articlesSort = articlesFilter
    ?.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
    .slice(0, 8)

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
          slidesPerView: 5,
        }
      }}
      pagination={{
        clickable: true,
        //dynamicBullets: true,
      }}
      keyboard={{ enabled: true }}
      grabCursor={true}
      style={{
        width: "100%",
        boxSizing: "content-box",
        height: "inherit"
      }}
      modules={[ Pagination, Keyboard ]}
      className={bulletClass}
    >
      {
        articlesSort.map(( el, index) => (
        <SwiperSlide key={index} className={classes.carousel}>
          <Box className={classes.container}>
            <>
              <Box
                style={{ 
                  backgroundImage: `url(${el?.image[0]?.url})`, 
                  objectFit: "contain", 
                  backgroundRepeat: "no-repeat", 
                  backgroundSize: "cover", 
                  backgroundPosition: "center", 
                  height: "200px", 
                  width: "310",
                  }} />
              <Box className={classes.textContainer}>
                <Typography className={classes.title}>
                  {el?.title}
                </Typography>
                <Link
                  href={`${BLOG}/${el?.Key}`} >
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

export default BlogPost
