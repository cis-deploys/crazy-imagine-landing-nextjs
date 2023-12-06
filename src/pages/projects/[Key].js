import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

import Layout from "../../components/Layout"
import { NextSeo } from 'next-seo';

const ProjectsKey = dynamic(
  () => import("../../components/ProjectsKey"),
  { ssr: false },
)

export async function getServerSideProps(context) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
    const { query } = context;
    const { Key } = query;

    const resprojectsAll = await fetch(`${domain}projects?locale=es-VE&_limit=6&_sort=created_at:DESC&populate=images&populate=galleryImages&populate=seo`)
    const resprojectsAllEs = await fetch(`${domain}projects?locale=en&_limit=6&_sort=created_at:DESC&populate=images&populate=galleryImages&populate=seo`)//falta restringuir seo
    const projectsAll = await resprojectsAll.json();
    const projectsAllEs = await resprojectsAllEs.json();

    const resProjects = await fetch(`${domain}projects?filters[Key][$eq]=${Key}&locale=all&populate=images&populate=galleryImages&populate=seo`)
    const projects = await resProjects.json()

    return { props: { projects, projectsAll, projectsAllEs } }
}


const Project = ({ projects, projectsAll, projectsAllEs }) => {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

  const projectsNew = [];

  const [metaTitle, setMetaTitle] = useState();
  const [metaDescription, setMetaDescription] = useState();
  const [keywords, setKeywords] = useState();
  const [ title, setTitle ] = useState();
  
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

  const projectsAllNew = [];
  projectsAll.data.map(({ attributes: { title, description, details, moreAbout, slug, Key, createdAt, locale, images, galleryImages, seo}}) => {
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
    projectsAllNew.push({
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

  const projectsAllEsNew = [];
  projectsAllEs.data.map(({ attributes: { title, description, details, moreAbout, slug, Key, createdAt, locale, images, galleryImages, seo}}) => {
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
    projectsAllEsNew.push({
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
    setMetaTitle(projects.data[0]?.attributes.seo?.metaTitle),
    setMetaDescription(projects.data[0]?.attributes.seo?.metaDescription),
    setKeywords(projects.data[0]?.attributes.seo?.keywords)
    setTitle(projects.data[0]?.attributes.title)
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
      <ProjectsKey projects={ projectsNew } projectsAll={ projectsAllNew ? projectsAllNew?.concat(projectsAllEsNew) : [] }/>

    </Layout>
  )
}

export default Project
