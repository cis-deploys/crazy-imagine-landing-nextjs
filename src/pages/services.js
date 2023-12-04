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

  const resProjects = await fetch(`${domain}projects?locale=all&populate=images&populate=galleryImages&populate=seo`)
  const projects = await resProjects.json()

  return { props: { projects } }
}

function Services({ projects }) {
  const { t } = useTranslation()
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

  const projectsNew = [];

  projects.data.map(({ attributes: { title, description, details, moreAbout, slug, Key, createdAt, locale, images, galleryImages, seo}}) => {
    const imagesArticles = [];
    if(images.data){
      images.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url//: `${domain}${url}`
        });
      });
    }
    const galleryImagesArticles = [];
    if(galleryImages.data){
      galleryImages.data.map(({ attributes: { url }}) => {
        galleryImagesArticles.push({
          url//: `${domain}${url}`
        });
      });
    }
    projectsNew.push({
      title,
      description,
      details,
      moreAbout,
      slug,
      Key,
      createdAt,
      locale,
      images: imagesArticles,
      galleryImages: galleryImagesArticles,
      seo
    });

  });

  return (
    <Layout>
      <NextSeo
        title={`Crazy Imagine Software | Services`}
        description={`Crazy Imagine Software Offer Software Development of High-Quality Web and Mobile Applications To Meet Our Client’s Unique Demands. Contac Us!`}
        keywords={`crazy imagine, web development services, mobile app development, Software Development Company, Web and Mobile App Development Firm, developer, software, work, Full-stack Development, programming, user Experience, quality support`}
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
