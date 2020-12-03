import { graphql, useStaticQuery } from "gatsby"

export default function useProjectData() {
  const projectData = useStaticQuery(graphql`
    query getProjectData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              project_title
              project_photos{
                childImageSharp {
                  fluid( maxWidth: 800 ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              excerpt
              slug
              live_project_link
              project_github_repo
            }
          }
        }
      }
    }
  `)
  return projectData.allMarkdownRemark.edges
}