import React, { useState, useEffect } from "react"

import { useTranslation } from "react-i18next"
import Link from "next/link"

import "swiper/swiper.min.css"
import "swiper/css"

import {
  Box,
  Checkbox,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Hidden,
  Grid,
  Card,
  CardContent,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { makeStyles } from "@mui/styles"
import CardMedia from "@mui/material/CardMedia"

import { PROJECTS } from "../navigation/sitemap"
import FilterProjectMovil from "./FilterProjectMovil"

const useStyles = makeStyles(theme => ({
  ContainerSection: {
    width: "100%",
    height: "auto",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "row",
    padding: "50px 0px",
    [theme.breakpoints.down("lg")]: {
      padding: "30px 0px",
      flexDirection: "column",
    },
  },
  containerProject: {
    display: "flex",
    padding: "0px 43px",
    flexDirection: "column",
    order: 2,
    width: "80%",
    height: "auto",
    [theme.breakpoints.up("xl")]: {
      width: "85%",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  ron: {
    "& > div:first-of-type": {
      height: "250px",
    },
  },
  cardProject: {
    maxWidth: "500px",
    borderRadius: "14px",
    [theme.breakpoints.between(2500, 4000)]: {
      width: "500px",
    },
    [theme.breakpoints.between(1951, 2499)]: {
      width: "400px",
    },
    [theme.breakpoints.between(1280, 1950)]: {
      width: "330px",
    },
    [theme.breakpoints.between(960, 1279)]: {
      width: "300px",
    },
  },
  cardMediaProject: {
    height: "190px",
    maxWidth: "500px",
    minWidth: "230px",
    [theme.breakpoints.between(2500, 4000)]: {
      height: "250px",
    },
    [theme.breakpoints.between(1280, 1450)]: {
      height: "190px",
    },
    [theme.breakpoints.between(960, 1279)]: {
      height: "169px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "190px",
    },
  },
  cardContentProject: {
    height: "110px",
    [theme.breakpoints.between(2500, 4000)]: {
      height: "120px",
      padding: "28px 0px 28px 28px"
    },
    [theme.breakpoints.between(1280, 2499)]: {
      height: "100px",
    },
    [theme.breakpoints.between(960, 1279)]: {
      height: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "91px",
    },
  },
  containerItemProjects: {
    backgroundClip: "border-box",
    marginBottom: "9px",
    color: "#FFFFFF",
  },
  textContainer: {
    background: "#FFFFFF",
    padding: "6px 25px 22px 37px",
    height: "100px",
    [theme.breakpoints.down("md")]: {
      gap: "13px",
      padding: "18px 18px 16px 26px",
      height: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "50px",
      gap: "8px",
      padding: "11px 11px 10px 16px",
    },
  },
  titleProject: {
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
  linkProject: {
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
  containerSelect: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "30px",
    order: 1,
    width: "20%",
    justifyContent: "center",
    marginBottom: "90px",
    [theme.breakpoints.up("xl")]: {
      width: "15%",
      flexDirection: "column",
      alignItems: "center",
    },
    // [theme.breakpoints.down("lg")]: {
    //   width: "25%",
    //   flexDirection: "column",
    //   alignItems: "center",
    // },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      padding: "20px",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "5px",
    },
  },
  TypographyTitleFilter: {
    fontFamily: "Nexa Bold",
    fontSize: "25px",
    display: "flex",
    textAlign: "center",
    color: "#696969",
    marginBottom: "20px",
  },
  containerFilter: {
    display: "flex",
    backgroundColor: "#FFFFFF",
    padding: "20px",
    flexDirection: "column",
    borderRadius: "20px",
    width: "100%",
    height: "100%",
  },
  SelectFilters: {
    display: "flex",
    marginLeft: "5px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    border: "2px solid #FFFFFF",
    "&:hover": {
      background: "tranparend",
      border: "none",
    },
    "&.css-ueukts-MuiButtonBase-root-MuiToggleButton-root.Mui-selected": {
      background: "#30AADE",
    },
  },
  formSelect: {
    margin: "3",
    width: "350px",
    [theme.breakpoints.between(2550, 4000)]: {
      width: "600px",
    },
    [theme.breakpoints.between(381, 460)]: {
      width: "310px",
    },
    [theme.breakpoints.between(0, 380)]: {
      width: "240px",
    },
  },
  labelSelect: {
    fontFamily: "Nexa Bold",
    fontSize: "18px",
    color: "#27AAE1",
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
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
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "12px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    textDecoration: "none",
    userSelect: "none",
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      lineHeight: "11px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
      lineHeight: "9px",
    },
  },
  titleCarousel: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#193174",
    userSelect: "none",
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px",
      lineHeight: "18px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px",
      lineHeight: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: "18px",
      fontSize: "18px",
      lineHeight: "18px",
      width: "90%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    [theme.breakpoints.between(0, 300)]: {
      fontWeight: "18px",
      fontSize: "18px",
      lineHeight: "18px",
    },
  },
  dragger: {
    transition: "transform 0.1s ease-in-out",
  },
}))

const dotParticlesStyles = (page, selectedPage) => {
  return {
    backgroundColor: page === selectedPage ? "blue" : "lightblue",
    cursor: "pointer",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    marginRight: "10px",
  }
}

const dotStyles = {
  marginTop: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "100%",
}

function createNumberArray(dynamicNumber) {
  return Array.from({ length: dynamicNumber }, (_, index) => index + 1)
}

const TableProjects = ({ projectsData }) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const projects = projectsData
  const projectsFilter = projects.filter(project =>
    project.locale.includes(lang)
  )

  const [projectDataAll, setProjectDataAll] = useState(
    projectsFilter.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
  )

  const [checkboxOption, setCheckboxOption] = useState([])

  const handleButton = (event, valueSelected) => {
    setCheckboxOption(prev => {
      const filtersSelected = prev.map(obj => {
        if (obj.type === valueSelected.type) {
          return { ...obj, checked: !valueSelected.checked }
        }
        return obj
      })
      return filtersSelected
    })
  }

  const loadingSelectedOption = () => {
    const types = projectsFilter
      .sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })
      .map(object => object.types)
      .flat()

    const uniqueTypes = types.filter((value, index, self) => {
      return value && self.indexOf(value) === index
    })
    const filters = uniqueTypes.map(item => {
      return { type: item, checked: false }
    })

    setCheckboxOption(filters)
  }

  useEffect(() => {
    const filters = checkboxOption.filter(item => item.checked)
    const filteredTecnologies = filters.map(item => item.type) || []

    let filteredProjects = []
    filteredTecnologies.forEach(tecnology => {
      projectsFilter.map(project => {
        if (project.types[0] === tecnology) {
          filteredProjects.push(project)
        }
      })
    })

    if (filteredProjects.length > 0) {
      setProjectDataAll(
        filteredProjects.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        })
      )
    } else {
      setProjectDataAll(
        projectsFilter.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        })
      )
    }
  }, [checkboxOption])

  useEffect(() => {
    if (!checkboxOption[0]) {
      loadingSelectedOption()
    }
  }, [i18n.language])

  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const totalPages = Math.ceil(projectDataAll.length / itemsPerPage)
  const pagesArray = createNumberArray(totalPages)

  const handleChangePage = value => {
    setPage(value)
  }

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleData = projectDataAll.slice(startIndex, endIndex)

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowSize.width < 600) setItemsPerPage(1)
    if (windowSize.width > 600 && windowSize.width < 960) setItemsPerPage(2)
    if (windowSize.width > 960 && windowSize.width < 1280) setItemsPerPage(3)
    if (windowSize.width > 1280) setItemsPerPage(6)
  }, [windowSize])

  const [onStartPosition, setOnStartPosition] = useState(0)
  const [onEndPosition, setOnEndPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const onDragGrid = event => {
    setOnStartPosition(event.pageX)
    setIsDragging(true)
  }

  const onEnd = event => {
    setOnEndPosition(event.pageX)
    setIsDragging(false)
  }

  const draggerElement = document.getElementById("draggedElement")

  useEffect(() => {
    if (isDragging) {
      if (draggerElement) {
        draggerElement.classList.add("classes.dragged")
      }
    } else {
      if (onStartPosition !== 0 && onEndPosition !== 0) {
        if (onStartPosition > onEndPosition) {
          if (page + 1 <= totalPages) setPage(page + 1)
        }

        if (onStartPosition < onEndPosition) {
          if (page - 1 > 0) setPage(page - 1)
        }

        if (draggerElement) {
          draggerElement.classList.remove("classes.dragged")
        }
      }
    }
  }, [onEndPosition])

  const handleTouchStart = event => {
    setOnStartPosition(event.targetTouches[0].screenX)
  }
  const handleTouchEnd = event => {
    setOnEndPosition(event.changedTouches[0].screenX)
  }

  return (
    <Box className={classes.ContainerSection}>
      <Box className={classes.containerSelect}>
        <Hidden lgDown>
          <Box className={classes.containerFilter}>
            <Typography className={classes.TypographyTitleFilter}>
              {t("project_page_filter")}
            </Typography>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.labelSelect}>
                  {t("project_filter_tecnologys")}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                {checkboxOption.map(e => {
                  return (
                    <FormGroup key={e.type}>
                      <FormControlLabel
                        checked={e.checked}
                        label={e.type}
                        control={<Checkbox value={e.checked} />}
                        onChange={ev => handleButton(ev, e)}
                      />
                    </FormGroup>
                  )
                })}
              </AccordionDetails>
            </Accordion>
          </Box>
        </Hidden>

        <Hidden lgUp>
          <FilterProjectMovil
            checkboxOption={checkboxOption}
            setCheckboxOption={setCheckboxOption}
          />
        </Hidden>
      </Box>

      <Box className={classes.containerProject}>
        <Grid
          container
          key={"grid-container-projects"}
          spacing={2}
          onDragStart={onDragGrid}
          onDragEnd={onEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          draggable="true"
          sx={{
            cursor: "pointer",
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {visibleData.map(cardProject => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={cardProject.id}>
              <Card className={classes.cardProject}>
                <CardMedia
                  className={classes.cardMediaProject}
                  image={cardProject.images[0].url}
                  title="Previous Projects"
                />
                <CardContent className={classes.cardContentProject}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className={classes.titleCarousel}
                  >
                    {cardProject.title}
                  </Typography>
                  <Link
                    href={`${PROJECTS}/[Key].js`}
                    as={`${PROJECTS}/${cardProject.Key}`}
                  >
                    <a className={classes.link}>
                      {t("common_projectSection_button_viewProject")}
                    </a>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
          <Grid>
          <Box sx={dotStyles}>
            {pagesArray.map(itemGrid => (
              <Box
                component="div"
                key={itemGrid}
                sx={dotParticlesStyles(itemGrid, page)}
                onClick={() => handleChangePage(item)}
              ></Box>
            ))}
          </Box>
          </Grid>
      </Box>
    </Box>
  )
}

export default TableProjects
