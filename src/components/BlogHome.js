import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import blogListStyles from "../styles/components/bloglist.module.scss"

export default function BlogList() {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div class="w-7/12 h-auto ml-auto mr-auto mt-20">
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link class="blog-home-links" to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                <li class="shadow-lg p-14 m-10 rounded-lg">
                    <h1>{blog.node.frontmatter.title}</h1>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
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

