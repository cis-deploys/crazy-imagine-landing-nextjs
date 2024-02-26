import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const SitemapMenu = dynamic(
    () => import("../components/SitemapMenu"),
    { ssr: false },
  )

  export const getStaticProps = async ({ locale }) => {
    return {
      props: {
        ...await serverSideTranslations(locale, ["common"]),
      },
    };
  };

  function Faq () {
    const { t, i18n } = useTranslation('common')
    const router = useRouter()

    useEffect(() => {
      const locale = router.locale;
  
      if (locale === 'es' && i18n.language !== 'es') {
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
