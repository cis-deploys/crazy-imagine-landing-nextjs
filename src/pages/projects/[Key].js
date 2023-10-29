import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

import Layout from "../../components/Layout"
import i18n from "../../../i18n"

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

  return (
    <Layout>

      <ProjectsKey projects={ projectsNew } projectsAll={ projectsAllNew ? projectsAllNew?.concat(projectsAllEsNew) : [] }/>

    </Layout>
  )
}

export default Project
