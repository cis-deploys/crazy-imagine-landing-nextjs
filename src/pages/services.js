import React, { useEffect, useState } from "react"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import { Box } from "@mui/material"

import headerImage from "../../public/robot.svg"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const ServicesSection = dynamic(
  () => import("../components/ServicesSection"),
  { ssr: false },
)

const ProjectSection = dynamic(
  () => import("../components/ProjectSection"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

export async function getServerSideProps({ locale }) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resProjects = await fetch(`${domain}projects?locale=${locale}&pagination[limit]=10&populate=images&populate=seo`)
  const projects = await resProjects.json()

  const resServices = await fetch(`${domain}services-page?locale=${locale}&populate=title&populate=seo`)
  const servicesPage = await resServices.json()

  return { props: { projects, servicesPage,
    ...await serverSideTranslations(locale, ['common'])
  } }
}

function Services({ projects, servicesPage }) {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

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
  const [ title, setMainTitle ] = useState(); 

  const projectsNew = [];

  projects.data.map(({ attributes: { title, Key, createdAt, locale, images, seo}}) => {
    const imagesArticles = [];
    if(images.data){
      images.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url//: `${domain}${url}`
        });
      });
    }

    projectsNew.push({
      title,
      Key,
      createdAt,
      locale,
      images: imagesArticles,
      seo
    });

  });

  useEffect(() => {
    setMetaTitle(servicesPage.data?.attributes.seo?.metaTitle),
    setMetaDescription(servicesPage.data?.attributes.seo?.metaDescription),
    setKeywords(servicesPage.data?.attributes.seo?.keywords)
    setMainTitle(servicesPage.data?.attributes.title)
  }, [servicesPage])

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
      <Box overflow="hidden">
        <SectionHeader
          title={t("services_sectionHeader_title")}
          img={headerImage}
          btn={true}
          cls="textContainer"
        />
        <ServicesSection />
        <ProjectSection
          title={t("services_projectSection_title")}
          btn={true}
          size={true}
          projects={projectsNew}
        />
        <ContactSection />
      </Box>
    </>
  )
}

export default Services
