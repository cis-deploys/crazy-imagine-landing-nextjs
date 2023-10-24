import React from 'react'
import { useTranslation } from "react-i18next"
import {  Box, FormControl, Select, MenuItem } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  button2: {
    background: "transparent",
    borderRadius: "100%",
    padding: "0px",
    margin: "0 -9px",
    cursor: "pointer",
    "&:hover": {
      //backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "HindVadodara",
      fontStyle: "normal",
      letterSpacing: "0.02em",
      borderRadius: "100%",
      padding: "0",
      fontSize: "30px",
      alignItems: "center",
      textAlign: "center",
      color: "#FFFFFF",
    },
    [theme.breakpoints.between(1280, 1470)]: {
      "& > span": {
        fontSize: "25px",
      },
    },
    [theme.breakpoints.between(0, 1280)]: {
      margin: "-5px",
    },
  },
  formControl: {
    width: "auto",
    zIndex: 99,
    color: "white",
    "&::before": {
      content: "''",
      display: "none",
      borderBottom: "1px solid white !important",
      border: "none",
    },
    "&::after": {
      content: "''",
      display: "none",
      borderBottom: "1px solid white !important",
      border: "none",
    },
    "&::hover": {
      display: "none",
      borderBottom: "1px solid white !important",
      border: "none",
    },
  },
  selectEmpty: {
    marginTop: "5px",
    width: "auto",
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nexa",
    letterSpacing: "0.1em",
    lineHeight: "16px",
    textAlign: "right",
    "& MuiInput-underline:hover:not(.Mui-disabled):before": {
      color: "white !important",
      borderBottom: "1px solid white !important",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      color: "white !important",
      borderBottom: "1px solid white !important",
    },
    "& ::MuiInput-underline:hover:not(.Mui-disabled):before": {
      color: "white !important",
      borderBottom: "1px solid white !important",
    },
    "&::before, &::after": {
      content: "''",
      position: "absolute",
      transition: "transform .5s ease",
      borderBottom: "none !important",
      color: "white !important",
    },
    "&::hover": {
      display: "none !important",
      color: "white !important",
      borderBottom: "1px solid white !important",
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        color: "white",
        borderBottom: "1px solid white !important",
      },
    },
    "& .MuiInputBase-input": {
      color: "white !important",
      animationName: "none",
      content: "''",
    },
    "& .MuiInput-underline:before": {
      content: "''",
      backgroundColor: "transparent",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      paddingRight: "0",
      width: "auto",
      padding: "0 0 0"
    },
    "& svg": {
      display: "none",
    },
  },
  item: {
    color: "#193174",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nexa",
    letterSpacing: "0.1em",
    lineHeight: "16px",
    zIndex: 999,
  },
  effect: {
    "&::before": {
      content: "''",
      left: "0",
      width: "100%",
      bottom: "-2px",
      height: "3px",
      background: "white",
      color: "white !important",
      transform: "scaleX(0)",
      borderBottom: "1px solid white !important",
    },
    "&:hover::before": {
      color: "white",
      background: "white",
      transform: "scaleX(1)",
    },
  },
  box: {
    border: 'none'
  }
}))

export const LanguageModal = () => {
  const classes = useStyles()
  const { i18n, t } = useTranslation();  
 
  const handleChange = (event) => {
    if (event.target.value === "ES") { i18n.changeLanguage("es"); }
    if (event.target.value === "EN") { i18n.changeLanguage("en"); }
  };

  return (
    <>
      <Box sx={{ border: 'none' }}>
        <FormControl className={ classes.formControl } variant="standard">
          <Select
            value={t("languageModal_select")}
            onChange={handleChange}
            className={`${classes.selectEmpty} ${classes.effect}`}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={t("languageModal_select")} className={ classes.item }>
              {t("languageModal_select")}
            </MenuItem>
            {(t("languageModal_select") === "ES") ?
              <MenuItem value="EN" className={ classes.item }>EN</MenuItem>
              :
              <MenuItem value="ES" className={ classes.item }>ES</MenuItem>
            }
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default LanguageModal