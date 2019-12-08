import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Nav from "../components/nav"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Nav />
      <SEO title={post.frontmatter.title} />
      <div className="max-w-4xl mx-auto p-4 mt-4">
        <h1 className="text-purple-600 font-bold text-4xl">
          {post.frontmatter.title}
        </h1>
        <div
          className="markdown text-gray-800 mt-8 mb-24 text-lg"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
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
