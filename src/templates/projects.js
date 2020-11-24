import React from "react"
import Layout from "../components/Layout"
import blogTemplateStyles from "../styles/templates/blog.module.scss"
import Img from 'gatsby-image'

export default function Blog(props) {
   

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

