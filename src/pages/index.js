import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPosts from "../components/blog-posts"
import About from "../components/about"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <About />
      <BlogPosts data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
