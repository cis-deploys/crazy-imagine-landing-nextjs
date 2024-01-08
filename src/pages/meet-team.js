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

    members?.data.map(( data ) => {

      // const order = index + 1;
      const imagesAvatar = [];
      if(data.attributes.avatar.data){
        data.attributes.avatar.data.map(({ attributes: { url }}) => {
          imagesAvatar.push({
            url,//: `${domain}${url}`
          });
        });
      }
      
      membersNew.push({
        id: data.id,
        // order: order,
        Portafolio: data.attributes.Portafolio,
        avatar: imagesAvatar,
        avatarHover: data.attributes.avatarHover,
        cardDescription: data.attributes.cardDescription,
        createdAt: data.attributes.createdAt,
        description: data.attributes.description,
        email: data.attributes.email,
        lastName: data.attributes.lastName,
        name: data.attributes.name,
        positions: data.attributes.positions,
        publishedAt: data.attributes.publishedAt,
        role: data.attributes.role,
        seo: data.attributes.seo,
        skill: data.attributes.skill,
        slug: data.attributes.slug,
        technologies: data.attributes.technologies,
        updatedAt: data.attributes.updatedAt,
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
