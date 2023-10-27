import React, { useRef, useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard } from 'swiper/core';
import { Pagination } from "swiper";
import 'swiper/swiper-bundle.css';

const useStyles = makeStyles(theme => ({
  review: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "100%",
    textAlign: "center",
    letterSpacing: "0.01em",
    color: "#193174",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
      height: "inherit",
    },
  },
  customerName: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    textAlign: "center",
    alignSelf: "flex-end",
    color: "#27AAE1",
    marginBottom: "6px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
  customerOcupation: {
    color: "#193174",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    textAlign: "center",
    alignSelf: "flex-end",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
      lineHeight: "9px",
    },
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "2px",
    [theme.breakpoints.down("md")]: {
      gap: "1px",
    },
  },
  icon: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "18px",
    textAlign: "center",
    color: "#FFD337",
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
      lineHeight: "13px",
    },
  },
  containerInfo: {
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    padding: "32px 50px 25px 50px",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    width: "max-content",
    height: "400px",
    boxSizing: "border-box",
    [theme.breakpoints.down("lg")]: {
      padding: "22px 35px 18px 35px",
      gap: "14px",
      height: "400px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "22px 35px 18px 35px",
      gap: "14px",
      height: "inherit",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "14px 22px 11px 22px",
      gap: "9px",
      height: "inherit",
    },
    [theme.breakpoints.down("xs")]: {
      width: "inherit",
      height: "inherit",
    },
  },
  swiperSlide: {
    height: "600px",
    alignItems: "center",
    transform: "scale(1)",
    [theme.breakpoints.between(1201, 1280)]: {
      height: "250px",
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
}))

  const CustomerReview = ({ reviews, bulletClass }) => {
  const classes = useStyles()
  SwiperCore.use([Keyboard])
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const [projectDataAll, setProjectDataAll] = useState(reviews.filter(article =>
    article.locale.includes(lang)
  ));

  useEffect(() => {
      setProjectDataAll(reviews.filter(article =>
        article.locale.includes(lang)
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
                slidesPerView: 5,
              }
            }}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            style={{
              width: "100%",
              boxSizing: "content-box",
            }}
            keyboard={{ enabled: true }}
            modules={[Pagination, Keyboard]}
            className={bulletClass}
          >
            { projectDataAll
            ?.map((review, index) => (

              <SwiperSlide key={index} className={classes.swiperSlide}>
                <Box className={classes.containerInfo}>
                  <Box className={classes.iconsContainer}>
                    <FontAwesomeIcon
                      size="1x"
                      icon={faStar}
                      className={classes.icon}
                    />
                    <FontAwesomeIcon
                      size="1x"
                      icon={faStar}
                      className={classes.icon}
                    />
                    <FontAwesomeIcon
                      size="1x"
                      icon={faStar}
                      className={classes.icon}
                    />
                    <FontAwesomeIcon
                      size="1x"
                      icon={faStar}
                      className={classes.icon}
                    />
                  </Box>
                  <>
                    <Typography className={classes.review}>
                      {review.review}
                    </Typography>
                    <Box>
                      <Typography className={classes.customerName}>
                        {review.name}
                      </Typography>
                      <Typography className={classes.customerOcupation}>
                        {review.ocupation}
                      </Typography>
                    </Box>
                  </>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

        )}

export default CustomerReview
