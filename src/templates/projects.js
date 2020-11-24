import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import useProjectData from '../static_queries/useProjectData'
import blogTemplateStyles from "../styles/templates/blog.module.scss"
//this component handles the blur img & fade-ins
import Img from 'gatsby-image'

export default function Blog(props) {
  const data = props.data.markdownRemark
  const allProjectData = useProjectData()
  const nextSlug = getNextSlug(data.fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allProjectData.map(projects => {
      return projects.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if(nextSlug !== undefined && nextSlug !== '') {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

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
export const getProjectData = graphql`
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
        live_project_link
        project_github_repo
      }
      excerpt(pruneLength: 200)
      fields {
        slug
      }    
      html
    }
  }
`
