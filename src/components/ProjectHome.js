import React from "react"
import { Link } from "gatsby"
import blogListStyles from "../styles/components/bloglist.module.scss"
import useProjectData from "../static_queries/useProjectData"

export default function BlogList() {
  const projectData = useProjectData()
  function renderBlogData() {
    return (
      <div class="w-7/12 h-auto ml-auto mr-auto mt-20">
        {projectData
          .filter(projects => projects.node.frontmatter.title !== "")
          .map(projects => {
            return (
              <Link class="blog-home-links" to={`/projects/${projects.node.fields.slug}`} key={projects.node.id}>
                <li class="shadow-lg p-14 m-10 rounded-lg">
                    <h1>{projects.node.frontmatter.title}</h1>
                    <h3>{projects.node.frontmatter.date}</h3>
                    <p>{projects.node.excerpt}</p>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}

