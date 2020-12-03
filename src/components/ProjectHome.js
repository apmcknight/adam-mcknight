import React from "react"
import { Link } from "gatsby"
import blogListStyles from "../styles/components/bloglist.module.scss"
import useProjectData from "../static_queries/useProjectData"

export default function ProjectList() {
  const projectData = useProjectData()
  function renderProjectData() {
    return (
      <div class="w-7/12 h-auto ml-auto mr-auto mt-20">
        {projectData
          .filter(projects => projects.node.frontmatter.project_title !== "")
          .map(projects => {
            return (
              <Link class="blog-home-links" to={`/projects/${projects.node.frontmatter.slug}`} key={projects.node.id}>
                <li class="shadow-lg p-14 m-10 rounded-lg">
                    <h1>
                      {projects.node.frontmatter.project_title}
                    </h1>
                    <p>
                      {projects.node.frontmatter.excerpt}
                      </p>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderProjectData()}</ul>
    </section>
  )
}

