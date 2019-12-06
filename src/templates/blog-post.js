import React from "react"
import { graphql } from "gatsby"

import "../styles/style.css"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogPost from "../components/blog-post"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <BlogPost post={post} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
