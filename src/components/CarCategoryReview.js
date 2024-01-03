import { Grid, Typography, Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import NextImage from "next/image"
import { makeStyles } from "@mui/styles"
import { StyleComponent } from "./StyleComponent"
import ReactStars from "react-stars"
import React, { useState } from "react"

import RestoreIcon from "@mui/icons-material/Restore"
import { format, parseISO } from "date-fns"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faCode } from "@fortawesome/free-solid-svg-icons"
import Avatar from "@mui/material/Avatar"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 90px",
    minHeight: "max-content",
    height: "100%",
    alignItems: "start",
    marginBottom: "16px",
    paddingBottom: "100px",
    paddingTop: "30px",

    [theme.breakpoints.down("lg")]: {
      padding: "0px 60px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0px 43px",
      flexDirection: "column",
      height: "auto",
      marginRight: "-50px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      flexDirection: "column",
      width: "100%",
      padding: "0px 43px",
      marginRight: "-50px",
    },
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 90px",
    height: "max-content",
    alignItems: "start",
    paddingBottom: "100px",
    paddingTop: "30px",

    [theme.breakpoints.down("lg")]: {
      padding: "0px 60px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0px 43px",
      flexDirection: "column",
      height: "auto",
      marginRight: "-50px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      flexDirection: "column",
      width: "100%",
      padding: "0px 43px",
      marginRight: "-50px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "2.6rem",
    textAlign: "left",
    color: "#193174",
    marginTop: "78px",
    marginBottom: "35px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "54px",
      marginBottom: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "21px",
      lineHeight: "21px",
      marginTop: "20px",
      marginBottom: "25px",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "2.6rem",
    textAlign: "left",
    color: "#193174",
    marginTop: "78px",
    marginBottom: "35px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "54px",
      marginBottom: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "21px",
      lineHeight: "21px",
      marginTop: "20px",
      marginBottom: "25px",
    },
  },
  dateContainer: {
    position: "relative",
    marginBottom: "25px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "35px",
    },
  },
  date: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    color: "#193174",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
      marginBottom: "35px",
    },
  },

  borderBottom: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "30%",
    height: "2px",
    backgroundColor: "#193174",
  },
  raterStar: {
    color: "#ffcf27",
    width: "30px",
    height: "30px",
  },
  ratingBox: {
    marginTop: "7px",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "55px",
    paddingLeft: 0,
  },

  ratingReferences: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    color: "#193174",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
      marginBottom: "35px",
    },
  },
  subtitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "25px",

    textAlign: "left",
    color: "#193174",
    marginTop: "-29px",
    marginBottom: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      marginTop: "54px",
      marginBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  comment: {
    fontFamily: "HindVadodara", //Nexa Bold HindVadodara
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    color: "#193174",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
      marginBottom: "35px",
    },
  },
  calification: {
    fontFamily: "HindVadodara", //Nexa Bold HindVadodara
    fontStyle: "normal",
    fontWeight: "400",
    color: "#193174",
  },

  iconProject: {
    fontSize: "40px",
    marginTop: "40px",
    color: "#193174",
  },
  projectCategory: {
    color: "#193174",
    fontFamily: "HindVadodara",
    marginTop: "50px",
  },
  categoryProject: {
    color: "#193174",
    fontFamily: "HindVadodara",
    fontSize: "20px",
  },
  projectTime: {
    color: "#193174",
    fontFamily: "HindVadodara",
  },
  containerCategory: {
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    width: "100%",
    minHeight: "max-content",
  },
  nameReviewer: {
    fontFamily: "Nexa ",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",

    textAlign: "center",
    color: "#193174",

    marginBottom: 0,
    marginLeft: "24px",

    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  contentReviewer: {
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
  },
  nameOcupation: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",

    textAlign: "center",
    color: "#193174",

    marginBottom: 0,
    marginLeft: "24px",

    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  subtitleReviewer: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",

    textAlign: "left",
    color: "#193174",
    marginTop: "-29px",
    marginBottom: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      marginTop: "54px",
      marginBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
}))

function formatMonthYear(date) {
  return format(parseISO(date), "MMMM yyyy")
}

const CarCategoryReview = ({ categoryReview, reviews }) => {
  const classes = useStyles()
  const classesComponent = StyleComponent()
  const { t } = useTranslation()

  const searchProject = () => {
    let existsReview = null
    categoryReview?.attributes.reviews?.data?.find(review => {
      existsReview = reviews?.data?.find(re => review.id === re.id)
    })
    return existsReview
  }

  return (
    <Grid container className={classes.containerCategory}>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.container}>
        {categoryReview?.attributes.reviews?.data?.map(r => {
          return (
            <>
              <Typography className={classes.title}>
                {r.attributes.name}
              </Typography>
              <Box className={classes.dateContainer}>
                <Typography className={classes.date}>
                  {formatMonthYear(r?.attributes?.publishedAt) ?? "None"}
                </Typography>
                <Box className={classes.borderBottom}></Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h3"
                  style={{ marginRight: "10px" }}
                  className={classes.calification}
                >
                  5.0
                </Typography>
                <ReactStars
                  count={5}
                  value={5}
                  size={40}
                  color2={"#ffd84c"}
                  edit={false}
                />
              </Box>
              <Box className={classes.ratingBox}>
                <Box style={{ flexDirection: "column", marginRight: "40px" }}>
                  <Typography className={classes.ratingReferences}>
                    {t("Quality")}
                  </Typography>
                  <Typography variant="h4" className={classes.calification}>
                    5.0
                  </Typography>
                </Box>
                <Box style={{ flexDirection: "column", marginRight: "40px" }}>
                  <Typography className={classes.ratingReferences}>
                    {t("Schedule")}
                  </Typography>
                  <Typography variant="h4" className={classes.calification}>
                    5.0
                  </Typography>
                </Box>
                <Box style={{ flexDirection: "column", marginRight: "40px" }}>
                  <Typography className={classes.ratingReferences}>
                    {t("Cost")}
                  </Typography>
                  <Typography variant="h4" className={classes.calification}>
                    5.0
                  </Typography>
                </Box>
                <Box style={{ flexDirection: "column", marginRight: "40px" }}>
                  <Typography className={classes.ratingReferences}>
                    {t("Willing_to_Refer")}
                  </Typography>
                  <Typography variant="h4" className={classes.calification}>
                    5.0
                  </Typography>
                </Box>
              </Box>

              <Box style={{ marginTop: "10px" }}>
                <Typography className={classes.subtitle}>
                  Comment List
                </Typography>
                <Typography className={classes.comment}>
                  {r.attributes.review}
                </Typography>
              </Box>

              <Box className={classes.contentReviewer}>
                <Typography className={classes.subtitleReviewer}>
                  The reviewer
                </Typography>
                <Box style={{ display: "flex", alignItems: "flex-start" }}>
                  <Avatar
                    alt={r.attributes.name}
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <Typography className={classes.nameReviewer}>
                      {r.attributes.name}
                    </Typography>
                    <Typography className={classes.nameOcupation}>
                      {r.attributes.ocupation}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          )
        })}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.container2}>
        <Typography className={classes.title2}>
          {searchProject()?.attributes?.project?.data?.attributes?.title ?? ""}
        </Typography>

        <Box style={{ marginTop: "10px" }}>
          <Typography className={classes.comment}>
            {searchProject()?.attributes?.project?.data?.attributes?.details ??
              ""}
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faCode}
            style={{
              marginRight: "10px",
              fontSize: "40px",
              color: "#193174",
              marginTop: "40px",
            }}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography className={classes.projectCategory}>
              Development
            </Typography>
            <Typography className={classes.categoryProject}>
              {categoryReview?.attributes?.Development ?? "None"}
            </Typography>
          </Box>
        </Box>
        <Box
          style={{ display: "flex", alignItems: "center", marginTop: "50px" }}
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            style={{ fontSize: "40px", marginRight: "10px", color: "#193174" }}
          />

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography className={classes.projectTime}>
              Project Duration
            </Typography>
            <Typography className={classes.categoryProject}>
              {formatMonthYear(categoryReview?.attributes?.publishedAt) ??
                "None"}
            </Typography>
          </Box>
        </Box>
        <Box
          style={{ display: "flex", alignItems: "center", marginTop: "50px" }}
        >
          <RestoreIcon
            style={{ fontSize: "40px", color: "#193174", marginRight: "10px" }}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography className={classes.projectTime}>
              Project Size
            </Typography>
            <Typography className={classes.categoryProject}>
              $25,000 to Date
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CarCategoryReview
