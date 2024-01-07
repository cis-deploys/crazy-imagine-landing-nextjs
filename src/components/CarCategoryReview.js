import { Grid, Typography, Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import NextImage from "next/image"
import { makeStyles } from "@mui/styles"
import { StyleComponent } from "./StyleComponent"
import ReactStars from "react-stars"
import React, { useState } from "react"
import Chip from "@mui/material/Chip"

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
    paddingBottom: "10px",

    [theme.breakpoints.down("lg")]: {
      padding: "0px 60px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0px 43px",
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      flexDirection: "column",
      width: "100%",
      padding: "0px 43px",
    },
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 90px",
    height: "max-content",
    alignItems: "start",
    paddingBottom: "10px",

    [theme.breakpoints.down("lg")]: {
      padding: "0px 60px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0px 43px",
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      flexDirection: "column",
      width: "100%",
      padding: "0px 43px",
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
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "54px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
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
    paddingBottom: "35px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "54px",
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
  },
  date: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    color: "#193174",
    marginBottom: "10px",
    paddingTop: "8px",

    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
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
      marginBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  commentReview: {
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
    },
  },

  boxProjects: {
    marginTop: "10px",
  },
  commentProject: {
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
  projectCategoryTitle: {
    color: "#193174",
    fontFamily: "Nexa Bold",
    marginBottom: "7px",
    fontWeight: "700",
    fontStyle: "normal",
  },
  categoryProject: {
    color: "#193174",
    fontFamily: "HindVadodara",
    fontSize: "15px",
  },
  boxPrincProjectDuration: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: "16px",
  },
  boxProjectDuration: {
    display: "flex",
    flexDirection: "column",
  },
  textProjectDuration: {
    color: "#193174",
    fontFamily: "Nexa Bold",
    marginBottom: "7px",
    fontWeight: "700",
    fontStyle: "normal",
  },
  boxProjectsize: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: "16px",
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: 0,
    },
  },
  boxTextProjectsize: {
    display: "flex",
    flexDirection: "column",
  },
  textProjectSize: {
    color: "#193174",
    fontFamily: "Nexa Bold",
    marginBottom: "7px",
    fontWeight: "700",
    fontStyle: "normal",
  },
  containerCategory: {
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    width: "100%",
    marginBottom: "8px",
    minHeight: "max-content",
    [theme.breakpoints.between("xs", "sm")]: {
      boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
      width: "100%",
      minHeight: "max-content",
    },
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
      textAlign: "left",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      textAlign: "left",
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
      marginBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  containerComment: {
    paddingTop: "16px",
  },
  box1ProjectCategory: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: "16px",
    height: "max-content",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  boxTextProjectCategory: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
  },

  boxConteProjectCategory: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 1,
    p: 1,
  },
  iconProjectCategory: {
    marginRight: "10px",
    fontSize: "40px",
    color: "#193174",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
  iconProjectDuration: {
    fontSize: "40px",
    marginRight: "10px",
    color: "#193174",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
  iconProjectSize: {
    fontSize: "40px",
    color: "#193174",
    marginRight: "10px",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
}))

function formatMonthYear(date) {
  return format(parseISO(date), "MMMM yyyy")
}

const CarCategoryReview = ({ review, index }) => {
  const classes = useStyles()
  const classesComponent = StyleComponent()
  const { t } = useTranslation()

  const renderInfoProject = () => {
    const projectDuration =
      review?.attributes?.project?.data?.attributes?.project_duration
    const projectSize =
      review?.attributes?.project?.data?.attributes?.project_size
    return (
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.container2}>
        <Typography className={classes.title2}>
          {review?.attributes?.project?.data?.attributes?.title ?? ""}
        </Typography>

        <Box className={classes.boxProject}>
          <Typography className={classes.commentProject}>
            {review?.attributes?.project?.data?.attributes?.details ?? ""}
          </Typography>
        </Box>
        {console.log("review ", review)}

        <Box className={classes.box1ProjectCategory}>
          <FontAwesomeIcon
            icon={faCode}
            className={classes.iconProjectCategory}
          />
          <Box className={classes.boxTextProjectCategory}>
            <Typography className={classes.projectCategoryTitle}>
              {t("Project Category")}
            </Typography>
            <Box className={classes.boxConteProjectCategor}>
              {review?.attributes?.category_reviews?.data?.map((cat, index) => {
                const color = index % 2 === 0 ? "primary" : "secondary"

                return (
                  <Chip
                    key={cat?.id}
                    sx={{ marginRight: 1, mb: 1 }}
                    label={
                      <Typography color="white">
                        {cat?.attributes?.Name}
                      </Typography>
                    }
                    color={color}
                  />
                )
              })}
            </Box>
          </Box>
        </Box>

        {projectDuration && (
          <Box className={classes.boxPrincProjectDuration}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={classes.iconProjectDuration}
            />

            <Box className={classes.boxProjectDuration}>
              <Typography className={classes.textProjectDuration}>
                {t("Project Duration")}
              </Typography>
              <Typography className={classes.textProjectDuration}>
                {projectDuration} {t("Hours")}
              </Typography>
            </Box>
          </Box>
        )}
        {projectSize && (
          <Box className={classes.boxProjectsize}>
            <RestoreIcon className={classes.iconProjectSize} />
            <Box className={classes.boxTextProjectsize}>
              <Typography className={classes.textProjectSize}>
                {t("Project Size")}
              </Typography>
              <Typography className={classes.textProjectSize}>
                {projectSize}
              </Typography>
            </Box>
          </Box>
        )}
      </Grid>
    )
  }

  const renderInfoReview = () => {
    return (
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.container}>
        <Typography className={classes.title}>
          {review.attributes.name}
        </Typography>
        <Box className={classes.dateContainer}>
          <Typography className={classes.date}>
            {formatMonthYear(review?.attributes?.createdAt) ?? "None"}
          </Typography>
          <Box className={classes.borderBottom}></Box>
        </Box>
        {/* <Box
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
        </Box> */}
        {/* <Box className={classes.ratingBox}>
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
              {t("test")}
            </Typography>
            <Typography variant="h4" className={classes.calification}>
              5.0
            </Typography>
          </Box>
        </Box> */}

        <Box className={classes.containerComment}>
          <Typography className={classes.subtitle}>
            {t("Comment List")}
          </Typography>
          <Typography className={classes.commentReview}>
            {review.attributes.review}
          </Typography>
        </Box>

        <Box className={classes.contentReviewer}>
          <Typography className={classes.subtitleReviewer}>
            {t("The reviewer")}
          </Typography>
          <Box style={{ display: "flex", alignItems: "flex-start" }}>
            <Avatar
              alt={review.attributes.name}
              src=""
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
                {review.attributes.name}
              </Typography>
              <Typography className={classes.nameOcupation}>
                {review.attributes.ocupation}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    )
  }

  const renderFinish = () => {
    if (index % 2 == 0) {
      return (
        <>
          {renderInfoReview()}
          {renderInfoProject()}
        </>
      )
    } else {
      return (
        <>
          {renderInfoProject()}
          {renderInfoReview()}
        </>
      )
    }
  }

  return (
    <Grid container className={classes.containerCategory}>
      {renderFinish()}
    </Grid>
  )
}

export default CarCategoryReview
