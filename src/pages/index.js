import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BlogPosts from "../components/Posts"
import About from "../components/About"
import Tags from "../components/Tags"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <About />
      <BlogPosts data={data} />
      {/* <Tags data={data} /> */}
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
            excerpt
            tags
          }
          excerpt
        }
      }
    }
  }
`
