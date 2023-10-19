import React from "react"
import {
  Box,
  Typography,
  InputLabel,
} from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router"

// COMPONENTS
import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent";
import RecentlyPosted from "../../components/RecentlyPosted";
import LastestPosts from "../../components/LastestPosts";
import ContactSection from "../../components/ContactSection";
import Image from "next/image";



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
    width: "80%",
    paddingTop: "60px",
    margin: "90px auto 0px auto",
    [theme.breakpoints.down("md")]: {
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
    padding: "10% 5%",
    gap: "50px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
  },
}))

export async function getServerSideProps(context) {
  const { query } = context;
  const { Key } = query;
  const resArticles = await fetch(`https://strapi.crazyimagine.com/articles`)
  const articles = await resArticles.json()

  return { props: { articles, } }
}

const Post = ({ articles }) => {
  const classes = useStyles()
  const { i18n, t } = useTranslation()
  const lang = i18n.language 
  const router = useRouter();
  const { Key } = router.query;

  
  const articlesFilter = articles
  ?.filter( article => article?.Key === Key)
  ?.filter(articles => articles?.locale?.includes(lang)) || []
      const title = articlesFilter[0]?.title || ''
      const description = articlesFilter[0]?.description || ''
      const author = articlesFilter[0]?.author.name || ''
      const category = articlesFilter[0]?.category.name || ''
      const date = articlesFilter[0]?.category.created_at || ''

  return (
    <Layout>

      <Box className={classes.header}>
        <>
          <InputLabel className={classes.label}>{t(category)}</InputLabel>
          <Typography className={classes.title} variant="h1" component="h1">
            {t(title)}
          </Typography>
          <Typography className={classes.date}>
            {t(date)} │ <span className={classes.author}>{t(author)}</span>
          </Typography>
          <Typography className={classes.description}>{t(description)}</Typography>
        </>
      </Box>
      <Box className={classes.imgContainer}>
        <Image src={articlesFilter[0]?.image[0]?.url} alt={title} width={1700} height={1000} />
      </Box>
      <Box className={classes.contentContainer}>
        <PostContent data={articlesFilter[0]} />
        <RecentlyPosted articles={ articles }/>
      </Box>
      <LastestPosts articles={ articles }/>
      <ContactSection />
    </Layout>
  )
}



export default Post