import React from "react"
import dynamic from 'next/dynamic'
import PropTypes from "prop-types"

import { Box, Hidden } from "@mui/material"
 
// COMPONENTS
import SEO from "./seo"

const Navbar = dynamic(
  () => import("./Navbar"),
  { ssr: false },
)

const NavbarMobile = dynamic(
  () => import("./NavbarMobile"),
  { ssr: false },
)

const Footer = dynamic(
  () => import("./Footer"),
  { ssr: false },
)

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
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
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
