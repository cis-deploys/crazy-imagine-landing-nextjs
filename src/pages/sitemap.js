import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"
import { useRouter } from 'next/router'

const SitemapMenu = dynamic(
    () => import("../components/SitemapMenu"),
    { ssr: false },
  )

  function Faq () {
    const { t, i18n } = useTranslation()
    const router = useRouter()

    useEffect(() => {
      // Obtener la locale del router
      const locale = router.locale;
  
      if (locale === 'es' && i18n.language !== 'es') {
        // Establecer el idioma en español si no está establecido
        i18n.changeLanguage('es');
      }
    }, [router.locale, i18n]);

  return (
    <Layout >

    <SitemapMenu/>

    </Layout>
  )
}

export default Faq
