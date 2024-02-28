import React, { useEffect, useState } from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

import headerImage from "../../public/layer2.svg"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"

const SectionHeader = dynamic(() => import("../components/SectionHeader"), {
  ssr: false,
})

const MeetTeamSection = dynamic(() => import("../components/MeetTeamSection"), {
  ssr: false,
})

const ContactSection = dynamic(() => import("../components/ContactSection"), {
  ssr: false,
})

export async function getServerSideProps({ locale }) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resArticles = await fetch(
    `${domain}members?members?populate=name&populate=role&populate=avatar`
  )
  const members = await resArticles.json()

  const resMeetTeam = await fetch(
    `${domain}meet-team-page?locale=${locale}&populate=title&populate=seo`
  )
  const meetTeamPage = await resMeetTeam.json()

  return {
    props: {
      members,
      meetTeamPage,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

const About = ({ members, meetTeamPage }) => {
  const { t, i18n } = useTranslation("common")
  const router = useRouter()

  useEffect(() => {
    // Obtener la locale del router
    const locale = router.locale

    if (locale === "es" && i18n.language !== "es") {
      // Establecer el idioma en español si no está establecido
      i18n.changeLanguage("es")
    }
  }, [router.locale, i18n])

  // const button = {
  //   refID: "contactSection",
  //   text: t("common_button_SCHEDULE_A_CALL"),
  // }
  const [metaTitle, setMetaTitle] = useState()
  const [metaDescription, setMetaDescription] = useState()
  const [keywords, setKeywords] = useState()
  const [title, setMainTitle] = useState()

  const membersNew = []

  members.data.map(
    ({ id, attributes: { name, role, avatar, cardDescription } }) => {
      const imagesAvatar = []
      if (avatar.data) {
        avatar.data.map(({ attributes: { url } }) => {
          imagesAvatar.push({
            url, //: `${domain}${url}`
          })
        })
      }
      membersNew.push({
        id,
        name,
        role,
        avatar: imagesAvatar,
        cardDescription,
      })
    }
  )

  useEffect(() => {
    setMetaTitle(meetTeamPage.data?.attributes.seo?.metaTitle),
      setMetaDescription(meetTeamPage.data?.attributes.seo?.metaDescription),
      setKeywords(meetTeamPage.data?.attributes.seo?.keywords)
    setMainTitle(meetTeamPage.data?.attributes.title)
  }, [meetTeamPage])

  return (
    <Layout>
      <NextSeo
        title={`Crazy Imagine Software | ${metaTitle ? metaTitle : title}`}
        description={`${
          metaDescription
            ? metaDescription
            : "Crazy Imagine Software Offer Software Development of High-Quality Web and Mobile Applications To Meet Our Client’s Unique Demands. Contac Us!"
        }`}
        keywords={`${
          keywords
            ? keywords
            : "crazy imagine, web development services, mobile app development, Software Development Company, Web and Mobile App Development Firm, developer, software, work, Full-stack Development, programming, user Experience, quality support"
        }`}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://crazyimagine.com",
        }}
      />
      <SectionHeader
        title={t("meetTheTeam_sectionHeader_title")}
        desc={t("meetTheTeam_sectionHeader_desc")}
        btn={true}
        img={headerImage}
        cls="textContainer"
      />
      <MeetTeamSection members={membersNew} />
      {/* <ContactSection /> */}
    </Layout>
  )
}
export default About
