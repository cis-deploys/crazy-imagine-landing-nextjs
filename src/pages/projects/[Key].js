import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

import Layout from "../../components/Layout"
import i18n from "../../../i18n"

const ProjectsKey = dynamic(
  () => import("../../components/ProjectsKey"),
  { ssr: false },
)

export async function getServerSideProps(context) {
    const { query } = context;
    const { Key } = query;

    const resprojectsAll = await fetch(`https://strapi.crazyimagine.com/projects?_locale=es-VE&_limit=6&_sort=created_at:DESC`)
    const resprojectsAllEs = await fetch(`https://strapi.crazyimagine.com/projects?_locale=en&_limit=6&_sort=created_at:DESC`)
    const projectsAll = await resprojectsAll.json();
    const projectsAllEs = await resprojectsAllEs.json();

    const resProjects = await fetch(`https://strapi.crazyimagine.com/projects?Key=${Key}&_locale=all`)
    const projects = await resProjects.json()
  
    return { props: { projects, projectsAll, projectsAllEs } }
}

const Project = ({ projects, projectsAll, projectsAllEs }) => {

  return (
    <Layout>

      <ProjectsKey projects={ projects } projectsAll={ projectsAll.concat(projectsAllEs) }/>

    </Layout>
  )
}

export default Project
