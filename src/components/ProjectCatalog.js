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

// const query = graphql`
//   query {
//     projects: allStrapiProjects {
//       nodes {
//         id
//         slug
//         Key
//         images {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 layout: FULL_WIDTH
//                 placeholder: BLURRED
//                 quality: 5
//                 formats: [WEBP]
//               )
//             }
//           }
//         }
//       }
//     }
//   }
// `
export default ProjectCatalog
