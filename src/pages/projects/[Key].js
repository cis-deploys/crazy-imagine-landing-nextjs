import React from "react"
import dynamic from "next/dynamic";

import Layout from "../../components/Layout"

const ProjectsKey = dynamic(
  () => import("../../components/ProjectsKey"),
  { ssr: false },
)

export async function getServerSideProps(context) {
    const { query } = context;
    const { Key } = query;
    const resProjects = await fetch(`https://strapi.crazyimagine.com/projects`)
    const projects = await resProjects.json()
  
    return { props: { projects } }
}

const Project = ({ projects }) => {




  return (
    <Layout>

      <ProjectsKey projects={ projects }/>

    </Layout>
  )
}

export default Project
