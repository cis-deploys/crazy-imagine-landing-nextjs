import React from "react"
import dynamic from 'next/dynamic'
import PropTypes from "prop-types"

import { Box, Hidden } from "@mui/material"
 
import { useRouter } from "next/router"
import GoogleAdsTag from "./GoogleAdsTag"

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
  if (router.pathname.includes("technical-discovery")) {
    navbarColor = "primary"
  }
  if (router.pathname.includes('sitemap')) {
    navbarColor = "primary";
  }
  return (
    <>
      <Hidden lgDown>
        <Navbar variant="secondary" color={navbarColor} />
      </Hidden>
      <Hidden lgUp>
        <NavbarMobile color={navbarColor} />
      </Hidden>
      <GoogleAdsTag/>
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
