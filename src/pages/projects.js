import React from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'
import { Box } from "@mui/material"

import Layout from "../components/Layout"

import headerImage from "../../public/robot.svg"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

const ProjectsTable = dynamic(
  () => import("../components/ProjectsTable"),
  { ssr: false },
)

export async function getServerSideProps() {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
  const resArticles = await fetch(`${domain}projects?populate=*`)
  const projects = await resArticles.json()

  return { props: { projects } }
}

function Projects({ projects }) {
  const { t } = useTranslation()
  // console.log(projects.data)
  
  const projectsNew = [];

  projects?.data.map(({ 
    attributes:{
      Key,
      createdAt,
      description,
      details,
      galleryImages,
      images,
      locale,
      localizations,
      moreAbout,
      publishedAt,
      seo,
      slug,
      title,
      updatedAt,
    }} ) => {
      
    const imagesArticles = [];
    if(images){
      images.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url,//: `${domain}${url}`
        });
      });
    }
    // --------------------------- eliminar valores de prueba ----------------------------
    const tipo1 = "Wordpress";
    const tipo2 = "App con JS";
    const tipo3 = "eCommerce";
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
      galleryImages,
      seo,
      type: tipo1
    });
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
      galleryImages,
      seo,
      type: tipo2
    });
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
      galleryImages,
      seo,
      type: tipo3
    });
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
      galleryImages,
      seo,
      type: tipo1
    });
    
  });

  return (
    <Layout>
      <Box overflow="hidden">
        <SectionHeader 
          title={t("common_button_projects")}
          img={headerImage}
          btn={true}
          cls="textContainer"
        />
        <ProjectsTable
          AllArticles={projectsNew}
        />
        <ContactSection/>
      </Box>
    </Layout>
  )
}

export default Projects
