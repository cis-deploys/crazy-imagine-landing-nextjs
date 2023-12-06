import React, { useState, useEffect } from "react"
import { Box, Button, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Keyboard } from "swiper/core"
import { Pagination } from "swiper"
import "swiper/swiper-bundle.css"

const useStyles = makeStyles(theme => ({
  review: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "100%",
    textAlign: "left",
    letterSpacing: "0.02em",
    color: "#193174",
    height: "200px",
    minHeight: "100px",
    maxHeight: "200px",
    marginTop: "20px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "23px",
      minHeight: "250px",
      maxHeight: "100%",
    },
    [theme.breakpoints.between(1281, 1921)]: {
      fontSize: "15px",
      minHeight: "200px",
      maxHeight: "100%",
    },
    [theme.breakpoints.between(600, 1280)]: {
      fontSize: "13px",
      height: "130px",
      minHeight: "130px",
      maxHeight: "100%",
      marginTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      height: "130px",
      minHeight: "130px",
      maxHeight: "100%",
      marginTop: "10px"
    },
  },
  containerCustomer: {
    height: "50px",
  },
  customerName: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "18px",
    textAlign: "center",
    alignSelf: "flex-end",
    color: "#27AAE1",
    marginBottom: "5px",
    [theme.breakpoints.down("xl")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
      lineHeight: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "12px",
    },
  },
  customerOcupation: {
    color: "#193174",
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "18px",
    textAlign: "center",
    alignSelf: "flex-end",
    [theme.breakpoints.down("xl")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "10px",
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
    fontSize: "20px",
    lineHeight: "20px",
    textAlign: "center",
    color: "#FFD337",
    [theme.breakpoints.down("xl")]: {
      fontSize: "13px",
      lineHeight: "13px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
      lineHeight: "11px",
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
    width: "500px",
    height: "auto",
    minHeight: "450px",
    maxHeight: "600px",
    boxSizing: "border-box",
    marginTop: "30px",
    [theme.breakpoints.between(1281, 1950)]: {
      width: "420px",
      height: "400px",
      minHeight: "400px",
      maxHeight: "600px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "22px 35px 11px 35px",
      gap: "11px",
      height: "280px",
      minHeight: "280px",
      maxHeight: "300px",
    },
    [theme.breakpoints.between(401, 600)]: {
      padding: "22px 35px 11px 35px",
      gap: "14px",
      height: "240px",
      minHeight: "240px",
      maxHeight: "300px",
    },
    [theme.breakpoints.between(0, 400)]: {
      padding: "14px 22px 11px 22px",
      gap: "9px",
      height: "260px",
      minHeight: "260px",
      maxHeight: "300px",
    },
  },
  swiperSlide: {
    height: "600px",
    alignItems: "center",
    transform: "scale(1)",
    [theme.breakpoints.between(1281, 3000)]: {
      height: "450px",
    },
    [theme.breakpoints.between(1201, 1280)]: {
      height: "300px",
    },
    [theme.breakpoints.between(901, 1200)]: {
      height: "250px",
    },
    [theme.breakpoints.between(550, 900)]: {
      height: "250px",
    },
    [theme.breakpoints.between(400, 549)]: {
      height: "210px",
    },
    [theme.breakpoints.between(200, 400)]: {
      height: "250px",
    },
  },
  swiper: {
    width: "100%",
    boxSizing: "content-box",
    height: "500px",
    [theme.breakpoints.up("xl")]: {
      height: "550px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "350px",
    },
    [theme.breakpoints.down("md")]: {
      height: "330px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "330px",
    },
  },
  readMoreButton: {
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "Nexa bold",
    letterSpacing: "0.1em",
    lineHeight: "140%",
    color: "#797EF6",
    background: "none",
    paddingLeft: "20px",
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("xl")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "10px",
      lineHeight: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
      lineHeight: "8px",
    },
  },
}))

const CustomerReview = ({ reviews, bulletClass }) => {
  const classes = useStyles()
  SwiperCore.use([Keyboard])
  const { i18n, t } = useTranslation()
  const lang = i18n.language

  const handleTextLimits = (text, maxWords) => {
    if (!text || text.trim() === "") {
      return false
    }
    const words = text.split(" ")

    return words.length > maxWords ? true : false
  }

  const handleTextInTheArray = () => {
    const newReviews = reviews.filter(article => article.locale.includes(lang))
    const newArray = newReviews.map(card => {
      if (handleTextLimits(card.review, 35))
        return { ...card, exceedLimit: true, showFullText: false }
      return { ...card, exceedLimit: false, showFullText: false }
    })
    return newArray
  }

  const [projectDataAll, setProjectDataAll] = useState(handleTextInTheArray())

  const Words = (text, maxWords) => {
    if (!text || text.trim() === "") {
      return null
    }

    const words = text.split(" ")

    const truncatedText = words.slice(0, maxWords).join(" ")

    const displayText =
      words.length > maxWords ? `${truncatedText}...` : truncatedText

    return displayText
  }

  useEffect(() => {
    setProjectDataAll(handleTextInTheArray())
  }, [i18n.language])

  const handleShowFullText = index => {
    const newArray = projectDataAll.map((card, i) => {
      if (i === index) {
        card.showFullText = !card.showFullText
      }
      return { ...card }
    })
    setProjectDataAll(newArray)
  }

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
        },
      }}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      keyboard={{ enabled: true }}
      modules={[Pagination, Keyboard]}
      className={classes.swiper}
    >
      {projectDataAll?.map((review, index) => (
        <SwiperSlide key={index} className={classes.swiperSlide}>
          <Box className={classes.containerInfo}>
          <Box>
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

                {review.exceedLimit ? (
                  <>
                    <Typography className={classes.review} >
                      {review.showFullText ? review.review : Words(review.review, 35)}
                    </Typography>

                    <Button
                      className={classes.readMoreButton}
                      onClick={() => {
                        handleShowFullText(index)
                      }}
                    >
                      {review.showFullText ? t("readLess") : t("readMore")}
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography className={classes.review}>
                      {review.review}
                    </Typography>
                  </>
                )}
              </Box>

                <Box className={classes.containerCustomer}>
                  <Typography className={classes.customerName}>
                    {review.name}
                  </Typography>
                  <Typography className={classes.customerOcupation}>
                    {review.ocupation}
                  </Typography>
                </Box>
              </Box>


        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CustomerReview
