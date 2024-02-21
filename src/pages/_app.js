import { appWithTranslation } from 'next-i18next';

import "../styles/globals.css"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { theme } from "../theme"

function MyApp({ Component, pageProps }) {
  return (

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>

  )
}

export default appWithTranslation(MyApp);
