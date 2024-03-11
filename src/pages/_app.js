import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config';

import "../styles/globals.css"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { theme } from "../theme"
import Layout from '../components/Layout';

const emptyInitialI18NextConfig = {
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale,
    locales: nextI18NextConfig.i18n.locales,
  },
};

function MyApp({ Component, pageProps }) {
  return (

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

  )
}

export default appWithTranslation(MyApp, emptyInitialI18NextConfig);
