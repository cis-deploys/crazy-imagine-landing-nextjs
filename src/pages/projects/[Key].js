import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from "../../components/Layout"
import { NextSeo } from 'next-seo';

const ProjectsKey = dynamic(
  () => import("../../components/ProjectsKey"),
  { ssr: false },
)

export async function getServerSideProps(context) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
    const { query, locale } = context;
    const { Key } = query;
    
    const resprojectsAll = await fetch(`${domain}projects?locale=${locale}&pagination[limit]=5&_sort=created_at:DESC&populate=images&populate=galleryImages&populate=seo`)
    const projects = await resprojectsAll.json();
    
    const resProjects = await fetch(`${domain}projects?filters[Key][$eq]=${Key}&locale=${locale}&populate=images&populate=galleryImages&populate=seo`)
    const projectKey = await resProjects.json()
    
    
    return { props: { projectKey, projects, 
      ...await serverSideTranslations(locale, ['common'])
    } 
  }
}

const Project = ({ projectKey, projects }) => {
  const { t, i18n } = useTranslation('common')

  const [metaTitle, setMetaTitle] = useState();
  const [metaDescription, setMetaDescription] = useState();
  const [keywords, setKeywords] = useState();
  const [ title, setTitle ] = useState();
  
  const projectKeyNew = [];
  projectKey.data.map(({ attributes: { title, description, details, moreAbout, slug, Key, createdAt, locale, images, galleryImages, seo}}) => {
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
    projectKeyNew.push({
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

  useEffect(() => {
    setMetaTitle(projectKey.data[0]?.attributes.seo?.metaTitle),
    setMetaDescription(projectKey.data[0]?.attributes.seo?.metaDescription),
    setKeywords(projectKey.data[0]?.attributes.seo?.keywords)
    setTitle(projectKey.data[0]?.attributes.title)
  }, [projectKey])

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
      <ProjectsKey projectKey={ projectKeyNew } projects={ projectsNew }/>

    </Layout>
  )
}

export default Project
