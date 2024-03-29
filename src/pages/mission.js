import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import MissionImage from "../../public/Mision.svg"
import { useTranslation } from 'next-i18next'

import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const SectionHeader = dynamic(
    () => import("../components/SectionHeader"),
    { ssr: false },
  )

  const MissionComponent = dynamic(
    () => import("../components/MissionComponent"),
    { ssr: false },
  )

  export async function getServerSideProps({ locale }) {
    const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
  
    const resCompanyValue = await fetch(`${domain}company-values?locale=${locale}&populate=title&populate=description&populate=image`)
    const companyValue = await resCompanyValue.json()
  
    const resMissionPage = await fetch(`${domain}mission-page?locale=${locale}&populate=title&populate=seo&populate=images&populate=title_mission&populate=description_mission&populate=title_vission&populate=description_vission&populate=title_compamy_value`)
    const missionPage = await resMissionPage.json()
  
    return { props: { companyValue, missionPage,
      ...await serverSideTranslations(locale, ['common']),
    } }
  }

function Mission ({ companyValue, missionPage }) {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()

  useEffect(() => {
    // Obtener la locale del router
    const locale = router.locale;

    if (locale === 'es' && i18n.language !== 'es') {
      // Establecer el idioma en español si no está establecido
      i18n.changeLanguage('es');
    }
  }, [router.locale, i18n]);

    const [metaTitle, setMetaTitle] = useState();
    const [metaDescription, setMetaDescription] = useState();
    const [keywords, setKeywords] = useState();
    const [ title, setTitle ] = useState(); 

    const newCompanyValueArray = [];

    companyValue?.data.map(({ 
      id,
      attributes:{
        title,
        description,
        image,
        locale
      }} ) => {
  
        newCompanyValueArray.push({
        id,
        title,
        description,
        image,
        locale
      });
    });
  
      useEffect(() => {
        setMetaTitle(missionPage.data.attributes.seo?.metaTitle),
        setMetaDescription(missionPage.data.attributes.seo?.metaDescription),
        setKeywords(missionPage.data.attributes.seo?.keywords)
        setTitle(missionPage.data.attributes.title)
      }, [missionPage])


  return (
    <>
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
        title={t("mission_title")}
        btn={false}
        img={MissionImage}
        cls="textContainer"
      />    
      <MissionComponent companyValue={ newCompanyValueArray } missionPage={ missionPage }/>
    </>
  )
}

export default Mission
