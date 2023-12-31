import React, {  useState, useEffect } from "react"
import { Box, Grid, Typography, Button, Pagination } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import { BLOG } from "../navigation/sitemap"
import Link from "next/link"
import Image from "next/image"

const QUANTITYPAGE = 12;

const useStyles = makeStyles(theme => ({
  container: {
    padding: '2px',
    margin: '6px',
    width: '100%',
    position: 'relative'
  },
  containerItem:{
    backgroundClip: 'padding-box',
    padding: '9px',
    marginBottom: '9px',
  },
  textContainer: {
    background: "#FFFFFF",
    padding: "6px 25px 22px 37px",
    [theme.breakpoints.down("md")]: {
      gap: "13px",
      padding: "18px 18px 16px 26px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
      padding: "11px 11px 10px 16px",
    },
  },
  wrapperTitle2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: "38px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "22px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  wrapperContainer: {
    width: "100%",
    margin: "auto",
    padding: "5px",
    position: 'relative',
    maxWidth: "2300px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 15px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
    },
  },
  wrapperContainerSection: {
    width: "100%",
    padding: "50px",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#193174",
    textTransform: "uppercase",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: "2",
    height: "36px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "16px",
      lineClamp: "3",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      lineHeight: "10px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
  wrapper: {
    gap: "21px",
    padding: '5px',
    margin: '10px'
  },
  pagination: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "transparent",
    gap: "21px",
    marginTop: "40px",
    fontFamily: "Nexa Bold",
    fontSize: "10px",
    color: "#193174",
  },
}))

const BlogArticle = ({ AllArticles }) => {
  const classes = useStyles()

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const articles = AllArticles
  const articlesFilter = articles.filter(article =>
    article.locale.includes(lang)
  )

  const calculatePage = Math.ceil(articles.length / QUANTITYPAGE);

  const [projectDataAll, setProjectDataAll] = useState(articlesFilter
    .sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
  );

  useEffect(() => {
      const inicio = (currentPage - 1) * QUANTITYPAGE;
      const fin = inicio + QUANTITYPAGE;
      const articles = AllArticles.slice(inicio, fin);

      setProjectDataAll(articles
          .sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
          })
      );

  }, [i18n.language, currentPage]);

  return (
    <Box className={classes.wrapperContainerSection}>
      <Box className={classes.wrapperContainer}>
        <Typography
          className={classes.wrapperTitle2}
        >
          {t("common_button_projects")}
        </Typography>
        <Box className={classes.wrapper}>
          <Grid container spacing={3} sx={{ flexGrow: 1 }}  className={classes.container} justifyContent="space-between">
          {
          projectDataAll.map(( el, index) => {
              const dataImage = el?.images[0]?.url
              const title = el?.images[0]?.title
            return(
            <Grid xs={6} xsOffset={1} md={4} mdOffset={2} lg={3} lgOffset={1} key={index} className={classes.containerItem} >
              <Image className={classes.ron} src={dataImage} alt={title} width={580} height={250}/>
              <Box className={classes.textContainer}>
                <Typography className={classes.title}>
                  {el?.title}
                </Typography>
                <Link href={`${BLOG}/${el?.Key}`} >

                  <a className={classes.link}>
                  {t("common_lastestPosts_blogPost_button_readMore")}
                  </a>

                </Link>
              </Box>
            </Grid>
            
          )
          })}
          </Grid>
        </Box>
        <Box className={classes.pagination}>
            <Pagination count={calculatePage} page={currentPage} onChange={handlePageChange} color="primary" size="large" />
        </Box>
        
      </Box>
    </Box>

  )
}

export default BlogArticle
