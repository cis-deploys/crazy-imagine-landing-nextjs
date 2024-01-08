import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/marciano.svg"
import { NextSeo } from "next-seo"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const MeetTeamSection = dynamic(
    () => import("../components/MeetTeamSection"),
    { ssr: false },
  )

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

export async function getServerSideProps() {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resArticles = await fetch(`${domain}members?populate=*`)
  const members = await resArticles.json()

  return { props: { members} }
}

const About = ({ members }) => {
  const { t } = useTranslation()

  const membersNew = [];

  useEffect(() => {

    members?.data.map(({ 
      attributes:{
        Portafolio,
        avatar,
        avatarHover,
        cardDescription,
        createdAt,
        description,
        email,
        lastName,
        name,
        positions,
        publishedAt,
        role,
        seo,
        skill,
        slug,
        technologies,
        updatedAt,
      }}, index ) => {

      const order = index + 1;
      const imagesAvatar = [];
      if(avatar.data){
        console.log(avatar)
        avatar.data.map(({ attributes: { url }}) => {
          imagesAvatar.push({
            url,//: `${domain}${url}`
          });
        });
      }
      
      membersNew.push({
        order: order,
        Portafolio,
        avatar: imagesAvatar,
        avatarHover,
        cardDescription,
        createdAt,
        description,
        email,
        lastName,
        name,
        positions,
        publishedAt,
        role,
        seo,
        skill,
        slug,
        technologies,
        updatedAt,
      });
    });
  
  }, [])

  return (
    <Layout >
      <SectionHeader
        title={t("meetTheTeam_sectionHeader_title")}
        btn={false}
        img={headerImage}
        cls="textContainer"
      />
      <MeetTeamSection members={membersNew}/>
      <ContactSection />
    </Layout>
  )
}
export default About
