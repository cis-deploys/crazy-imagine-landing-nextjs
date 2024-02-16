import * as React from "react"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/rocket.svg"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { useEffect } from "react"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const PrivacyPolicySection = dynamic(
  () => import("../components/PrivacyPolicySection"),
  { ssr: false },
)

const Imagen = dynamic(
  () => import("../components/Imagen"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ["common"]),
    },
  };
};

const PrivacyPolicy = () => {
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
    <Layout>
      <NextSeo
        title={`Crazy Imagine Software | Privacy Policy`}
        description={`Crazy Imagine Software Offer Software Development of High-Quality Web and Mobile Applications To Meet Our Client’s Unique Demands. Contac Us!`}
        keywords={`crazy imagine, web development services, mobile app development, Software Development Company, Web and Mobile App Development Firm, developer, software, work, Full-stack Development, programming, user Experience, quality support`}
      />
      <SectionHeader
        title={t("privacyPolicy_title")}
        img={headerImage}
        btn={true}
        cls="textContainer"
      />
      <PrivacyPolicySection />
      <Imagen />
      <ContactSection />
    </Layout>
  )
}


export default PrivacyPolicy
