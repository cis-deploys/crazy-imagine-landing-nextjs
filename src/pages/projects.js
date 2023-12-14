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

const TableProjects = dynamic(
  () => import("../components/TableProjects"),
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
      project_types: types,
    }} ) => {
    const imagesArticles = [];
    const typesArticles = [];
    if(images){
      images.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url,//: `${domain}${url}`
        });
      });
    }
    if(types){
      types.data.map(({ attributes: { name }}) => {
        typesArticles.push( name );
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
      galleryImages,
      seo,
      types: typesArticles, 
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
        <TableProjects
          AllArticles={projectsNew}
        />
        <ContactSection/>
      </Box>
    </Layout>
  )
}

export default Projects
