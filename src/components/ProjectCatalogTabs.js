import React, { useState } from "react"
import { Box, Paper, Tab, Tabs } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsContainer: {
    backgroundColor: "transparent",
  },
  tabText: {
    color: "white !important",
  },
  ourPackages: {
    color: "white",
    fontFamily: "Gotham",
    textTransform: "uppercase",
  },
  ourPackagesContainer: {
    backgroundColor: "#23aae1",
  },
}))

const ProjectCatalogTabs = () => {
  const classes = useStyles()
  const [value, setValue] = useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box marginTop="75px">
      <Paper square className={classes.tabsContainer}>
        <Tabs
          value={value}
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="ALL" className={classes.tabText} />
          <Tab label="WEBDESING" className={classes.tabText} />
          <Tab label="MOBILE" className={classes.tabText} />
          <Tab label="DEVELOPMENT" className={classes.tabText} />
        </Tabs>
      </Paper>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
      </Box>
    </Box>
  )
}

export default ProjectCatalogTabs
