import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import {
  Box,
  Typography,
  InputLabel,
} from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router"
import Image from "next/image"

const PostContent = dynamic(
    () => import("./PostContent"),
    { ssr: false },
  )
  
  const RecentlyPosted = dynamic(
    () => import("./RecentlyPosted"),
    { ssr: false },
  )

const useStyles = makeStyles(theme => ({
    date: {
      fontFamily: "Nexa",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "22px",
      lineHeight: "22px",
      marginTop: "60px",
      color: "#193174",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: "16px",
        marginTop: "42px",
      },
    },
    header: {
      height: "auto",
      width: "90%",
      paddingTop: "60px",
      margin: "90px auto 0px auto",
      [theme.breakpoints.down("md")]: {
        margin: "0px auto 0px auto",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "0px auto 0px auto",
      },
      [theme.breakpoints.down("xs")]: {
        margin: "0px auto 0px auto",
      },
    },
    author: {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "900",
      fontSize: "22px",
      lineHeight: "31px",
      color: "#193174",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: "22px",
      },
    },
    title: {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "70px",
      lineHeight: "72px",
      color: "#193174",
      marginTop: "25px",
      [theme.breakpoints.down("md")]: {
        fontSize: "49px",
        lineHeight: "50px",
        marginTop: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        lineHeight: "25px",
        marginTop: "10px",
      },
    },
    imgContainer: {
      backgroundColor: "#27AAE1",
      display: "flex",
      justifyContent: "center",
      padding: "45px 0px",
      marginTop: "90px",
      maxHeight: "850px",
      [theme.breakpoints.down("md")]: {
        marginTop: "45px",
      },
    },
    description: {
      fontFamily: "HindVadodara",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "22px",
      lineHeight: "31px",
      color: "#787878",
      marginTop: "50px",
      [theme.breakpoints.down("md")]: {
        marginTop: "25px",
        fontSize: "17px",
        lineHeight: "22px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "25px",
        fontSize: "14px",
        lineHeight: "22px",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "25px",
        fontSize: "14px",
        lineHeight: "22px",
      },
    },
    root: {
      "& .MuiFormLabel-root": {
        fontFamily: "Nexa Bold",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "15px",
        lineHeight: "15px",
        letterSpacing: "0.1em",
        color: "white",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
          lineHeight: "12px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "10px",
          lineHeight: "10px",
        },
        [theme.breakpoints.down("sx")]: {
          fontSize: "10px",
          lineHeight: "10px",
        },
      },
    },
    label: {
      color: "white",
      background: "#071A4E",
      borderRadius: "5px",
      textTransform: "uppercase",
      padding: "10px 13px",
      width: "fit-content",
    },
    contentContainer: {
      display: "flex",
      flexDirection: "row",
      background: "white",
      padding: "5% 5%",
      gap: "50px",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      },
      
    },
  }))

const BlogKey = ({ articles, articlesAll }) => {
    const classes = useStyles()
    const { i18n, t } = useTranslation()
    const lang = i18n.language 
    const router = useRouter();
    const { Key } = router.query;
    
    const [projectData, setProjectData] = useState(articles
      ?.filter( project => project?.Key === Key && project?.Key !== null)
      ?.filter( articles => articles?.locale?.includes(lang)) || []);
      
    const [projectDataAll, setProjectDataAll] = useState(articlesAll
      ?.filter( articles => articles?.locale?.includes(lang)) || []);

        useEffect(() => {
          setProjectData(articles
            ?.filter( project => project?.Key === Key && project?.Key !== null)
            ?.filter( projects => projects?.locale?.includes(lang)) || []);

            setProjectDataAll(articlesAll
              ?.filter( projects => projects?.locale?.includes(lang)) || []);
        }, [i18n.language]);

  return (
    <>
    <Box className={classes.header}>
    <>
      <InputLabel className={classes.label}>{projectData[0]?.category.name}</InputLabel>
      <Typography className={classes.title} variant="h1" component="h1">
        {projectData[0]?.title}
      </Typography>
      <Typography className={classes.date}>
        {projectData[0]?.category.created_at} │ <span className={classes.author}>{projectData[0]?.author.name}</span>
      </Typography>
      <Typography className={classes.description}>{projectData[0]?.description}</Typography>
    </>
  </Box>
  <Box className={classes.imgContainer}>
    <Image src={projectData[0]?.image[0]?.url} alt={projectData[0]?.title} width={1700} height={1000} />
  </Box>
  <Box className={classes.contentContainer}>
    
    <PostContent articles={projectData} />
    <RecentlyPosted articles={ projectDataAll }/>
  </Box>
  </>
  )
}

export default BlogKey
