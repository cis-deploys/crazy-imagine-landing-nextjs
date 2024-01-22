import React from 'react'
import dynamic from 'next/dynamic'

import headerImage from "../../public/flag.webp"
import { useTranslation } from 'react-i18next'
import Layout from '../components/Layout'
import { Description } from '@mui/icons-material'

const SectionHeader = dynamic(
    () => import("../components/SectionHeader"),
    { ssr: false },
  )

  const MissionComponent = dynamic(
    () => import("../components/MissionComponent"),
    { ssr: false },
  )

  // export async function getServerSideProps() {
  //   const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
  
  //   const resCompanyValue = await fetch(`${domain}company-values?locale=en&locale=es-VE&populate=title&populate=description&populate=images`)
  //   const companyValue = await resCompanyValue.json()
  
  //   const resMissionPage = await fetch(`${domain}mission-page?populate=title&populate=seo&populate=images&populate=title_mission&populate=description_mission&populate=title_vission&populate=description_vission&populate=title_compamy_value`)
  //   const missionPage = await resMissionPage.json()
  
  //   return { props: { companyValue, missionPage } }
  // }

function Mission () {
    const { t } = useTranslation()

    // const [metaTitle, setMetaTitle] = useState();
    // const [metaDescription, setMetaDescription] = useState();
    // const [keywords, setKeywords] = useState();
    // const [ title, setTitle ] = useState(); 

    // const newFaqArray = [];

    // companyValue?.data.map(({ 
    //   id,
    //   attributes:{
    //     title,
    //     description,
    //     images,
    //     locale
    //   }} ) => {
  
    //   newFaqArray.push({
    //     title,
    //     description,
    //     images,
    //     locale
    //     locale
    //   });
    // });
  
    //   useEffect(() => {
    //     setMetaTitle(missionPage.data?.attributes.seo?.metaTitle),
    //     setMetaDescription(missionPage.data?.attributes.seo?.metaDescription),
    //     setKeywords(missionPage.data?.attributes.seo?.keywords)
    //     setTitle(missionPage.data?.attributes.title)
    //   }, [])

  return (
    <Layout>
      {/* <NextSeo
        title={`Crazy Imagine Software | ${metaTitle ? metaTitle : title}`}
        description={`${metaDescription ? metaDescription : 'Crazy Imagine Software Offer Software Development of High-Quality Web and Mobile Applications To Meet Our Client’s Unique Demands. Contac Us!'}`}
        keywords={`${keywords ? keywords : 'crazy imagine, web development services, mobile app development, Software Development Company, Web and Mobile App Development Firm, developer, software, work, Full-stack Development, programming, user Experience, quality support'}`}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://crazyimagine.com",
        }}
      /> */}
    <SectionHeader
        title={t("about_aboutSection_Mission_title")}
        btn={false}
        img={headerImage}
        cls="textContainer"
      />    
      <MissionComponent/>
    </Layout>
  )
}

export default Mission
