import React from 'react'

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'next-i18next'

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    height: "auto",
    minHeight: "200px",
    width: "fit-content",
    flexDirection: "column",
    margin: "0px 20px 0px 20px", 
    [theme.breakpoints.down("md")]: {
      minHeight: "100px",
  },
  },
  containerTitle: {
    margin: "50px 0px",
  [theme.breakpoints.down("md")]: {
    margin: "30px 0px",
  },
  },
  title:{
    display: "flex",
    fontSize:"25px",
    fontFamily: "Nexa Bold",
    color:"#193174",
    justifyContent: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize:"20px",
  },
  },
  question: {
    fontFamily: "HindVadodara",
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "18px",
    color: "#27AAE1",
    margin: "5px 0px",
    "&:hover": {
      color: "#797EF6",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize:"15px",
      lineHeight: "16px",
  },
  },
  answer: {
    fontFamily: "HindVadodara",
    fontSize: "18px",
    lineHeight: "20px",
    color: "#193174",
    [theme.breakpoints.down("sm")]: {
      fontSize:"15px",
      lineHeight: "16px",
  },
  },
}))

const GeneralFAQ = ({ generalFAQ }) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  return (
    <Box className={ classes.container }>

      <Box className={ classes.containerTitle}>
      <Typography className={ classes.title}>
      {t("about_aboutSection_faq_general")}
      </Typography>
      </Box>

      <Box>
        {generalFAQ.map((item, index) => (
      <Accordion elevation={0} key={item.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "grey"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={ classes.question }
        >
        {item.Questions}
        </AccordionSummary>
        <AccordionDetails className={ classes.answer}>
       {item.Ask}
        </AccordionDetails>
      </Accordion>
        ))}
      </Box>
    </Box>
  )
}

export default GeneralFAQ
