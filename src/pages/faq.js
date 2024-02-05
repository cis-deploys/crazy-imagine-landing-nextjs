import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import dynamic from 'next/dynamic'

import Layout from "../components/Layout"
import frequentlyAsk from "../../public/frequentlyAsk.webp"
import { NextSeo } from "next-seo"
import { useRouter } from 'next/router'

const SectionHeader = dynamic(
    () => import("../components/SectionHeader"),
    { ssr: false },
  )

  const FaqComponent = dynamic(
    () => import("../components/FaqComponent"),
    { ssr: false },
  )
  
  export async function getServerSideProps({ locale }) {
    const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
  
    const resFaq = await fetch(`${domain}faqs?locale=${locale}&populate=question&populate=ask&populate=faq_options`)
    const faq = await resFaq.json()

    const resFaqPage = await fetch(`${domain}faq-page?locale=${locale}&populate=seo&populate=title`)
    const faqPage = await resFaqPage.json()
  
    return { props: { 
      faq, faqPage,  
      ...await serverSideTranslations(locale, ['common']),}    
    } 
  }

  function Faq ({ faq, faqPage }) {
    const { t, i18n } = useTranslation('common')
    const router = useRouter()

    useEffect(() => {
      // Obtener la locale del router
      const locale = router.locale;
  
      if (locale === 'es-VE' && i18n.language !== 'es-VE') {
        // Establecer el idioma en español si no está establecido
        i18n.changeLanguage('es-VE');
      }
    }, [router.locale, i18n]);

    const [metaTitle, setMetaTitle] = useState();
    const [metaDescription, setMetaDescription] = useState();
    const [keywords, setKeywords] = useState();
    const [ title, setTitle ] = useState(); 

  const newFaqArray = [];

  faq?.data.map(({ 
    id,
    attributes:{
      Questions,
      Ask,
      faq_options,
      locale
    }} ) => {

    newFaqArray.push({
      id,
      Questions,
      Ask,
      faq_options,
      locale
    });
  });

    useEffect(() => {
      setMetaTitle(faqPage.data?.attributes.seo?.metaTitle),
      setMetaDescription(faqPage.data?.attributes.seo?.metaDescription),
      setKeywords(faqPage.data?.attributes.seo?.keywords),
      setTitle(faqPage.data?.attributes.title)
    }, [faqPage])

  return (
    <Layout >
      <NextSeo
        title={`Crazy Imagine Software | ${metaTitle ? metaTitle : title}`}
        description={`${metaDescription ? metaDescription : 'Crazy Imagine Software Offer Software Development of High-Quality Web and Mobile Applications To Meet Our Client’s Unique Demands. Contac Us!'}`}
        keywords={`${keywords ? keywords : 'crazy imagine, web development services, mobile app development, Software Development Company, Web and Mobile App Development Firm, developer, software, work, Full-stack Development, programming, user Experience, quality support'}`}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://crazyimagine.com",
        }}
      />
      <SectionHeader
        title={t("faq_title_page")}
        btn={false}
        img={frequentlyAsk}
        cls="textContainer"
      />

      <FaqComponent faq={ newFaqArray }/>

    </Layout>
  )
}

export default Faq
