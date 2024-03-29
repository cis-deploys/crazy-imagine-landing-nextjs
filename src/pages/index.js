import { Box } from "@mui/material"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import headerImage from "../../public/flag.webp"
import { NextSeo } from "next-seo"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"


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

export async function getServerSideProps({ locale }) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resProjects = await fetch(`${domain}projects?locale=${locale}&pagination[limit]=8&sort[0]=createdAt:desc&populate=images&populate=seo`)
  const projects = await resProjects.json()

  const resArticles = await fetch(`${domain}articles?locale=${locale}&pagination[limit]=8&sort[0]=createdAt:desc&populate=category&populate=author&populate=image&populate=seo`)
  const articles = await resArticles.json()

  const resReviews = await fetch(`${domain}reviews?locale=${locale}&pagination[limit]=8&sort[0]=createdAt:desc&populate=avatar`)
  const reviews = await resReviews.json()

  const resHomepage = await fetch(`${domain}home-page?locale=${locale}&populate=seo&populate=hero`)
  const homepage = await resHomepage.json()

  return { props: { 
    projects, articles, reviews, homepage,
    ...await serverSideTranslations(locale, ['common']),
   } }
}


function IndexPage({ projects, articles, reviews, homepage }) {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

  useEffect(() => {
    const locale = router.locale;

    if (locale === 'es' && i18n.language !== 'es') {
      i18n.changeLanguage('es');
    }
  }, [router.locale, i18n]);

  const button = {
    refID: "contactSection",
    text: t("common_button_SCHEDULE_A_CALL")
  }

  const projectsNew = [];
  const articlesNew = [];
  const reviewsNew = [];

  const [metaTitle, setMetaTitle] = useState();
  const [metaDescription, setMetaDescription] = useState();
  const [keywords, setKeywords] = useState();
  const [ title, setTitle ] = useState();


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

  articles.data.map(({ attributes: { title, Key, createdAt, locale, image, seo}}) => {
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
      Key,
      createdAt,
      locale,
      image: imagesArticles,
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
    setMetaTitle(homepage.data?.attributes.seo?.metaTitle),
    setMetaDescription(homepage.data?.attributes.seo?.metaDescription),
    setKeywords(homepage.data?.attributes.seo?.keywords),
    setTitle(homepage.data?.attributes.hero?.title)
  }, [homepage])


  return (
    <>
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
          projects={projectsNew}
          />

        <MailchimpForm />

        <Partners />

        <LastestPosts articlesAll={ articlesNew }/>

        <Box id="contactSection">
          <ContactSection bgColor="#FFFFFF" />
        </Box>
      </Box>
      </>
  )
}
export default IndexPage
