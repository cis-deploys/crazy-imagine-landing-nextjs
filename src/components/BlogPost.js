import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Keyboard } from "swiper/core"
import { useRouter } from "next/router"
import { Pagination } from "swiper"
import {  Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Link from "next/link"
import { useTranslation } from 'next-i18next'
import { BLOG } from "../navigation/sitemap"
import 'swiper/swiper-bundle.css';
import Image from "next/image"
import Loading from "./Loading"

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
    [theme.breakpoints.between(1921, 4000)]: {
      gap: "18px",
      height: "410px",
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
      fontSize: "12px",
      lineHeight: "12px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
    [theme.breakpoints.between(0, 450)]: {
      fontSize: "12px",
      lineHeight: "13px",
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
    [theme.breakpoints.down("xl")]: {
      fontSize: "12px",
      lineHeight: "12px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
    [theme.breakpoints.down("sm")]: {
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
      gap: "5px",
      padding: "10px 18px 10px 26px",
      height: "60px"
    },
    [theme.breakpoints.down("md")]: {
      gap: "13px",
      padding: "18px 18px 16px 26px",
      height: "70px"
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
    height: "500px",
    alignItems: "center",
    transform: "scale(1)",
    [theme.breakpoints.between(1281, 1920)]: {
      height: "300px",
    },
    [theme.breakpoints.between(901, 1280)]: {
      height: "300px",
    },
    [theme.breakpoints.between(550, 900)]: {
      height: "260px",
    },
    [theme.breakpoints.between(400, 549)]: {
      height: "250px",
    },
    [theme.breakpoints.between(200, 400)]: {
      height: "260px",
    },
  },
}))

const BlogPost = ({ bulletClass, articles }) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('common')
  const lang = i18n.language
  SwiperCore.use([Keyboard])
  const router = useRouter();
  const { Key } = router.query;

    const [visibleArticles, setVisibleArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
 
    useEffect(() => {
      setTimeout(() => setIsLoading(false), 2000);
    }, []);

    useEffect(() => {
      const handleResize = () => {
        const windowWidth = window.innerWidth;
  
        let articlesToShow = 5;
        if (windowWidth >= 768 && windowWidth < 1024) {
          articlesToShow = 6;
        } else if (windowWidth >= 1024) {
          articlesToShow = 10;
        }

        const visibleArticles = articles
        .slice(0, articlesToShow)
        ?.filter(article => article?.title !== null && article.Key !== Key) || []
        setVisibleArticles(visibleArticles);
      };
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [articles]);

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
        visibleArticles.map(( el, index) => (

        <SwiperSlide key={index} className={classes.carousel}>
          <Box className={classes.container}>

          {isLoading && (
            <Loading/>
          )}
          {!isLoading && (
            
            <>
            <Image
              src={el?.image[0]?.url}
              alt="article_blog"
              height="250px"
              width={310}
              quality={100}
              priority={ false } 
            />

              <Box className={classes.textContainer}>
                <Typography className={classes.title}>
                  {el?.title}
                </Typography>
                <Link
                  href={`${BLOG}/[Key].js`} as={`${BLOG}/${el?.Key}`} >
                  <a className={classes.link}>
                  {t("common_lastestPosts_blogPost_button_readMore")}
                  </a>
                </Link>
              </Box>
            </>
          )}
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>

  )
}

export default BlogPost
