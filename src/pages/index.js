import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'
import Head from 'next/head'

import Layout from "../components/Layout"

import headerImage from "../../public/flag.svg"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const HomeMainSection = dynamic(
  () => import("../components/HomeMainSection"),
  { ssr: false },
)

const ReferenceSection = dynamic(
  () => import("../components/ReferenceSection"),
  { ssr: false },
)

const ProjectSection = dynamic(
  () => import("../components/ProjectSection"),
  { ssr: false },
)

const MailchimpForm = dynamic(
  () => import("../components/MailchimpForm"),
  { ssr: false },
)

const Partners = dynamic(
  () => import("../components/Partners"),
  { ssr: false },
)

const LastestPosts = dynamic(
  () => import("../components/LastestPosts"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

export async function getServerSideProps() {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resProjects = await fetch(`${domain}projects?locale=es-VE&_limit=6&_sort=created_at:DESC&populate=images&populate=galleryImages&populate=seo`)
  const projects = await resProjects.json()

  const resProjectsEn = await fetch(`${domain}projects?locale=en&_limit=6&_sort=created_at:DESC&populate=images&populate=galleryImages&populate=seo`)
  const projectsEn = await resProjectsEn.json()

  const resArticles = await fetch(`${domain}articles?locale=es-VE&_limit=6&_sort=created_at:DESC&populate=category&populate=author&populate=image&populate=seo`)
  const articles = await resArticles.json()

  const resArticlesEn = await fetch(`${domain}articles?locale=en&_limit=6&_sort=created_at:DESC&populate=category&populate=author&populate=image&populate=seo`)
  const articlesEn = await resArticlesEn.json()

  const resReviews = await fetch(`${domain}reviews?locale=all&populate=avatar`)
  const reviews = await resReviews.json()

  const resHomepage = await fetch(`${domain}home-page?locale=all&populate=seo`)//falta restringuir con populate
  const homepage = await resHomepage.json()

  return { props: { projects, projectsEn, articles, articlesEn, reviews, homepage } }
}


function IndexPage({ projects, projectsEn, articles, articlesEn, reviews, homepage }) {
  const { t } = useTranslation()
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

  const projectsNew = [];
  const projectsEnNew = [];
  const articlesEnNew = [];
  const articlesNew = [];
  const reviewsNew = [];

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

  projectsEn.data.map(({ attributes: { title, description, details, moreAbout, slug, Key, createdAt, locale, images, galleryImages, seo}}) => {
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
    projectsEnNew.push({
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

  articlesEn.data.map(({ attributes: { title, description, content, slug, Key, createdAt, locale, image, category, author, seo}}) => {
    const imagesArticles = [];
    if(image.data){
      image.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url//: `${domain}${url}`
        });
      });
    }
    articlesEnNew.push({
      title,
      description,
      content,
      slug,
      Key,
      createdAt,
      locale,
      image: imagesArticles,
      category: category?.data?.attributes,
      author: author?.data?.attributes,
      seo
    });
  });

  articles.data.map(({ attributes: { title, description, content, slug, Key, createdAt, locale, image, category, author, seo}}) => {
    const imagesArticles = [];
    if(image.data){
      image.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url//: `${domain}${url}`
        });
      });
    }
    articlesNew.push({
      title,
      description,
      content,
      slug,
      Key,
      createdAt,
      locale,
      image: imagesArticles,
      category: category?.data?.attributes,
      author: author?.data?.attributes,
      seo
    });
  });

  reviews.data.map(({ attributes: { name, ocupation, review, createdAt, locale, avatar }}) => {
    const avatarReviews = [];
    if(avatar.data){
      avatar.data.map(({ attributes: { url }}) => {
        avatarReviews.push({
          url//: `${domain}${url}`
        });
      });
    }
    reviewsNew.push({
      name,
      ocupation,
      review,
      createdAt,
      locale,
      avatar: avatarReviews,
    });
  });
  

  return (
    <Layout >
      <Box overflow="hidden">
        <SectionHeader
          title={t("home_sectionHeader_title")}
          desc={t("home_sectionHeader_description")}
          btn={true}
          img={headerImage}
          cls="textContainer"
        />
        <HomeMainSection />

        <ReferenceSection reviews={ reviewsNew }/>

        <ProjectSection
          title={t("home_projectSection_title")}
          btn={true}
          size={true}
          projects={projectsNew.concat(projectsEnNew)}
        />
        <MailchimpForm />

        <Partners />

        <LastestPosts articlesAll={ articlesNew?.concat(articlesEnNew) }/>

        <ContactSection bgColor="#FFFFFF" />
      </Box>
    </Layout>
  )
}
export default IndexPage
