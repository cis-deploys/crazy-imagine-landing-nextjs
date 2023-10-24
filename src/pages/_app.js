import { I18nextProvider } from "react-i18next"
import { CssBaseline, ThemeProvider } from "@mui/material"

import "../styles/globals.css"
import "../styles/Swiper.module.css"
import "../styles/swiper-bullet.module.css"

import i18n from "../../i18n"
import { theme } from "../theme"
import SEO from "../components/seo"

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default MyApp
