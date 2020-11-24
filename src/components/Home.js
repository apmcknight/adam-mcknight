import React from "react"
// import { Link } from "gatsby"

import blogListStyles from "../styles/components/bloglist.module.scss"
 
export default function BlogList() {
   function renderBlogData() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perferendis neque, itaque corrupti porro ad ratione? Soluta voluptas expedita nisi illo optio dolor eos! Illum, eaque quisquam rem natus voluptas culpa at animi quaerat magni amet soluta quo dignissimos labore obcaecati dolorum facilis asperiores suscipit, odio blanditiis quae nihil? Sunt.
        </p>
        {/* {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                <li className={blogListStyles.li} key={blog.node.fields.slug}>
                  <div className={blogListStyles.list__hero}>
                    <Img 
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />
                  </div>
                  <div className={blogListStyles.list__info}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
              </Link>
            )
          })} */}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}

