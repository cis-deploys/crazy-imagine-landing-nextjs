import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'
import { Box } from "@mui/material"

import Layout from "../components/Layout"

import headerImage from "../../public/image_project_page.webp"
import { NextSeo } from "next-seo"

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

  const resProjects = await fetch(`${domain}projects?locale=en&locale=es-VE&populate=title&populate=project_types&populate=images`)
  const projects = await resProjects.json()
    
  const resProjectspage = await fetch(`${domain}projectspage?populate=seo&populate=mainTitle`)
  const projectsPage = await resProjectspage.json()

  return { props: { 
    projects,
     projectsPage } }
}

function Projects({ projects, projectsPage }) {
  const { t } = useTranslation()

  const [metaTitle, setMetaTitle] = useState();
  const [metaDescription, setMetaDescription] = useState();
  const [keywords, setKeywords] = useState();
  const [ mainTitle, setMainTitle ] = useState(); 
  
  const newProjectsArray = [];

  projects?.data.map(({ 
    id,
    attributes:{
      Key,
      createdAt,
      images,
      locale,
      moreAbout,
      seo,
      title,
      project_types: types,
    }} ) => {
    const imagesProjects = [];
    const typesProjects = [];

    if(images){
      images.data.map(({ attributes: { url }}) => {
        imagesProjects.push({
          url,//: `${domain}${url}`
        });
      });
    }
    if(types){
      types.data.map(({ attributes: { name }}) => {
        typesProjects.push( name );
      });
    }
    
    newProjectsArray.push({
      id,
      title,
      Key,
      createdAt,
      locale,
      images: imagesProjects,
      seo,
      types: typesProjects, 
    });
  });

useEffect(() => {
  setMetaTitle(projectsPage.data?.attributes.seo?.metaTitle),
  setMetaDescription(projectsPage.data?.attributes.seo?.metaDescription),
  setKeywords(projectsPage.data?.attributes.seo?.keywords)
  setMainTitle(projectsPage.data?.attributes.mainTitle)
}, [])

  return (
    <Layout>
      <NextSeo
        title={`Crazy Imagine Software | ${metaTitle ? metaTitle : mainTitle}`}
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
          title={t("project_title_page")}
          img={headerImage}
          btn={true}
          cls="textContainer"
        />
            <TableProjects projectsData={ newProjectsArray }/>
        <ContactSection/>
      </Box>
    </Layout>
  )
}

export default Projects
