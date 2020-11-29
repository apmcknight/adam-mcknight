import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import blogTemplateStyles from "../styles/templates/blog.module.scss"
import useProjectData from '../static_queries/useProjectData';
import Img from 'gatsby-image'

export default function Projects(props) {
  const data = props.data.markdownRemark
  const allProjectData = useProjectData()

  return (
    <Layout>
      <article className={blogTemplateStyles.blog}>
        <figure className={blogTemplateStyles.blog__hero}>
          <Img
            fluid={data.frontmatter.project_photos}
            alt={data.frontmatter.title}
          />
        </figure>
        <div className={blogTemplateStyles.blog__info}>
          <h1>{data.frontmatter.project_title}</h1>
        </div>
        <div
          className={blogTemplateStyles.projects__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
      </article>
    </Layout>
  )
}



//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        project_title
        project_photos {
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
      html
    }
  }
`

