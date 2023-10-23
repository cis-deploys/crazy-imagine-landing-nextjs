import React from "react"
import Projects from "./Projects"
import ProjectTabs from "./ProjectCatalogTabs"

const ProjectCatalog = ({ projects }) => {

        return (
          <>
            <ProjectTabs />
            <Projects projects={projects} />
          </>
        )
      }

export default ProjectCatalog
