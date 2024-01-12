import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'
import { Box } from "@mui/material"

import Layout from "../components/Layout"

import headerImage from "../../public/robot.svg"
import { NextSeo } from "next-seo"

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

export async function getServerSideProps() {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resProjects = await fetch(`${domain}projects?locale=all&populate=images&populate=seo`)
  const projects = await resProjects.json()

  const resServices = await fetch(`${domain}services-page?locale=en&locale=es-VE&populate=title&populate=seo`)
  const servicesPage = await resServices.json()

  return { props: { projects, servicesPage } }
}

function Services({ projects, servicesPage }) {
  const { t } = useTranslation()
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

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
  }, [])

  return (
    <Layout>
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
    </Layout>
  )
}

export default Services
