import React from "react"
import PropTypes from "prop-types"

import { Box, Hidden } from "@mui/material"
 
// COMPONENTS
import Navbar from "./Navbar"
import Footer from "./Footer"
import GoogleAdsTag from "./GoogleAdsTag"
import NavbarMobile from "./NavbarMobile"
import SEO from "./seo"

const Layout = ({ children, seo }) => {
  return (
    <>
      <SEO seo={ seo }/>
      <Hidden mdDown>
        <Navbar variant="secondary" />
      </Hidden>
      <Hidden lgUp>
        <NavbarMobile/>
      </Hidden>
      <Box
        sx={{
          maxWidth: {
            lg: "auto",
            xl: 1920,
          },
          margin: {
            lg: "0 auto",
          },
        }}
      >
        {children}
      </Box>
      <GoogleAdsTag/>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
