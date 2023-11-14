import React from "react"
import dynamic from 'next/dynamic'
import PropTypes from "prop-types"

import { Box, Hidden } from "@mui/material"
 
// COMPONENTS
import SEO from "./seo"
import { useRouter } from "next/router"

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
  const router = useRouter();
  let navbarColor = "transparent";
  if (router.pathname.includes('[Key]')) {
    navbarColor = "primary";
  }
  return (
    <>
      <SEO />
      <Hidden lgDown>
        <Navbar variant="secondary" color={navbarColor} />
      </Hidden>
      <Hidden lgUp>
        <NavbarMobile color={navbarColor} />
      </Hidden>
      <Box
        sx={{
          width: '100%',
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
