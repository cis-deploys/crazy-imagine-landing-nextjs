import React, {  useState, useEffect } from "react"
import { Box, Grid, Typography, Button, Pagination } from "@mui/material"
import { makeStyles } from "@mui/styles"

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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
  container2: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    flex: "1 0 40%",
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    height: "fit-content",
    maxWidth: "480px",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      maxWidth: "380px",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "auto",
      padding: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      gap: "13px",
    },
    [theme.breakpoints.down("xs")]: {
      flex: "1 0 48%",
      borderRadius: "7px",
      maxWidth: "250px",
      gap: "7px",
    },
  },
  filter: {
    padding: '5px'
  },
  ron:{
    "& > div:first-of-type":{
      height: "250px"
    },
  },
  containerItem:{
    backgroundClip: 'padding-box',
    padding: '9px',
    marginBottom: '9px',
  },
  buttonFilters: {
    color: "white", 
    margin: "5px",
    marginLeft: "5px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    // background: "red",
    background: "rgba(0,0,0,0.5)",
    border: "2px solid #797EF6",
    borderLeft: "2px solid #797EF6",
    "&:hover": {
      background: "tranparend",
      border: "none"
    },
    "&.css-ueukts-MuiButtonBase-root-MuiToggleButton-root.Mui-selected": {
      background: "#30AADE",
    },
  },
  activeButton: {
    background: "#30AADE",
    border: "none",
    color: "white",
  },
  inactiveButton: {
    background: "rgba(0,0,0,0.5)",
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
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#FFFFFF",
    marginBottom: "20px"
  },
  wrapperTitle: {
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
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
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
    "& .css-ov482b-MuiButtonBase-root-MuiPaginationItem-root": {
      background: "#b2b6ff",
      color: "transparent",
      margin: "4px",
      minWidth: "10px",
      width: "10px",
      height: "10px",
      opacity: "0.2"
    }, 
    "& .Mui-selected": {
      opacity: "1",
      background: "#1e87f0",
    },
  },
}))

const ProjectsTable = ({ AllArticles }) => {
  const classes = useStyles()

  const [currentPage, setCurrentPage] = useState(1);

  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const articles = AllArticles
  const articlesFilter = articles.filter(article =>
    article.locale.includes(lang)
  )
  const [calculatePage, setCalculatePage] = useState(Math.ceil(articles.length / QUANTITYPAGE));

  const [projectDataAll, setProjectDataAll] = useState(articlesFilter
    .sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
  );

  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handlePageChange = (event, value, ) => {
    setCurrentPage(value);
  };

  const handleButtonToggle = (event, newSelected) => {
    setCurrentPage(1);
    setSelectedButtons(newSelected);
    if(!newSelected[0]){
      loadingPage(articlesFilter);
      setCalculatePage(Math.ceil(articles.length / QUANTITYPAGE));
    }else{
      const filteredObjects = articlesFilter.filter((obj) => 
        ( obj.types.some(type => newSelected.includes(type.replace(/\s+/g, '').toLowerCase())) )
      );
      setCalculatePage(Math.ceil(filteredObjects.length / QUANTITYPAGE));
      loadingPage(filteredObjects);
    }
  };

  const loadingSelectedOption = () => {
    const types = articlesFilter.sort((a, b) => {return new Date(b.created_at) - new Date(a.created_at)})
      .map(object => object.types) 
      .flat();

    const uniqueTypes = types.filter((value, index, self) => {
      return value && self.indexOf(value) === index;
    });
    setSelectedOption(uniqueTypes); 
  };

  const loadingPage = (elements = []) =>{
    const inicio = (currentPage - 1) * QUANTITYPAGE;
      const fin = inicio + QUANTITYPAGE;
      const articles = elements.slice(inicio, fin);

      setProjectDataAll(articles
          .sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
          })
      );
  }

  useEffect(() => {
      if(!selectedOption[0]){
        loadingSelectedOption();
      }

      if(selectedButtons[0]){
        loadingPage(articlesFilter.filter((obj) => 
          ( obj.types.some(type => newSelected.includes(type.replace(/\s+/g, '').toLowerCase())) )
        ));
      }else{
        loadingPage(AllArticles);
      }

  }, [i18n.language, currentPage]);

  return (
    <Box className={classes.wrapperContainerSection}>
      <Box className={classes.wrapperContainer}>
        <Typography
          className={classes.wrapperTitle}
        >
          {t("common_button_projects")}
        </Typography>
        
        {selectedOption[0]?
          <Box className={classes.filter}>
            <Typography className={classes.wrapperTitle2}>
              Filtrar por:
            </Typography>
          </Box>
        :""}
       
        <Box>
          <form>
            <Box className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
              <ToggleButtonGroup
                value={selectedButtons}
                onChange={handleButtonToggle}
                aria-label="Checkbox toggle button group"
              >
                {selectedOption.map((e)=>{
                  function convert(e){
                    return e.replace(/\s+/g, '').toLowerCase()
                  }
                  return(
                    <ToggleButton
                      key={convert(e)}
                      value={convert(e)}
                      className={`${classes.buttonFilters} ${
                        selectedButtons.includes(convert(e)) ? classes.activeButton : classes.inactiveButton
                      }`}
                      aria-label={e}
                    >
                      {e}
                    </ToggleButton>
                  )
                })}
              </ToggleButtonGroup>
            </Box>
          </form>
        </Box> 
        
        <Box className={classes.wrapper}>
          <Grid container spacing={3} sx={{ flexGrow: 1 }}  className={classes.container} justifyContent="flex-start">
          {
          projectDataAll.map(( el, index) => {
              const dataImage = el?.images[0]?.url
              const title = el?.images[0]?.title
            return(
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} className={classes.containerItem} >
              <Box component="article" className={classes.container2}>
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
              </Box>
            </Grid>
            
          )
          })}
          </Grid>
        </Box>
        {calculatePage!==1? 
          <Box className={classes.pagination}>
            <Pagination count={calculatePage} page={currentPage} onChange={handlePageChange} color="primary" 
              size="small" hideNextButton hidePrevButton
            />
          </Box> 
        :""}
      </Box>
    </Box>

  )
}

export default ProjectsTable
