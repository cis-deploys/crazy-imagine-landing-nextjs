import * as React from "react"
import dynamic from "next/dynamic"

import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from "react"

const Content404 = dynamic(
  () => import("../components/Content404"),
  { ssr: false },
)

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ["common"]),
    },
  };
};

const NotFoundPage = () => {
  const { i18n } = useTranslation('common')
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
    <Layout>
      <Content404 />
    </Layout>
  )
}

export default NotFoundPage
