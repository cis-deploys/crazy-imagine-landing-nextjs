import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/flag.svg"
import { NextSeo } from "next-seo"
import { useEffect, useState } from "react"

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

  const resHomepage = await fetch(`${domain}home-page?locale=all&populate=seo&populate=hero`)//falta restringuir con populate
  const homepage = await resHomepage.json()

  return { props: { projects, projectsEn, articles, articlesEn, reviews, homepage } }
}


function IndexPage({ projects, projectsEn, articles, articlesEn, reviews, homepage }) {
  const { t } = useTranslation()
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

  const button = {
    refID: "contactSection",
    text: t("common_button_contact_us")
  }

  const projectsNew = [];
  const projectsEnNew = [];
  const articlesEnNew = [];
  const articlesNew = [];
  const reviewsNew = [];

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

  useEffect(() => {
  homepage.data.map(({ attributes: { seo, hero }}) => {
    if(seo){
      setMetaTitle(seo?.metaTitle),
      setMetaDescription(seo?.metaDescription),
      setKeywords(seo?.keywords)
    }
    if(hero){
      setTitle(hero?.title)
    }
  });

}, [])

  return (
    <Layout>
      <NextSeo
      title={`${metaTitle ? metaTitle : title}`}
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
          title={t("home_sectionHeader_title")}
          desc={t("home_sectionHeader_description")}
          btn={true}
          img={headerImage}
          cls="textContainer"
          button={button}
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

        <Box id="contactSection">
          <ContactSection bgColor="#FFFFFF" />
        </Box>
      </Box>
    </Layout>
  )
}
export default IndexPage
