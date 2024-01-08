import React, { useEffect, useState } from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material"
import { faSliders, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTranslation } from "react-i18next"
import { StyleComponent } from "./StyleComponent"

const FilterProjectMovil = ({ checkboxOption, setCheckboxOption }) => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const clases = StyleComponent()

  const [ open, setOpen ] = useState()

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
  
  const handleDrawerClose = () => {
    setOpen(!open)
  }

  const handleButtonClose = () => {
    setOpen(!open)
    setCheckboxOption( prev => {
      const buttonClosed = prev.map( obj => {
        return {...obj, checked: false}
      })
      return buttonClosed
    })
  }

  const [state, setState] = React.useState({
    left: false,
  })

  const handleAccordionClick = (event) => {
    event.stopPropagation();
  };

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 290 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
      
        <Box className={clases.containerFilterDrawer}>

          <Typography className={clases.TypographyFilter}>
          {t("project_page_filter")}
          </Typography>

          <Button className={ clases.buttonShowFilter } onClick={handleDrawerClose}>
            {t("project_filter_button_show")}
          </Button>

        <IconButton
          onClick={handleButtonClose}
          className={clases.IconButtonFilter}
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </IconButton>

        </Box> 

        <Accordion onClick={handleAccordionClick}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={clases.labelSelect}>
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
      </Box>
  )

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button className={clases.ButtonFilter} onClick={toggleDrawer('left', true)}>

          <FontAwesomeIcon icon={faSliders} style={{color: "#6e6e6e",}}/>

          <Typography className={clases.TypographyTitleFilter}>{t("project_page_filter")}</Typography>
        </Button>

        <SwipeableDrawer
          anchor={"left"}
          open={state['left']}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", false)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}

export default FilterProjectMovil
