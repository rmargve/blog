import React from "react"
import { Link } from "gatsby"

export default ({ data }) => (
  <div className="flex flex-col max-w-2xl mx-auto mt-8 lg:mt-24">
    {data.allMarkdownRemark.edges.map(edge => {
      return (
        <Link
          className="border-b-2 border-teal-600 pb-8 mb-8"
          to={edge.node.frontmatter.path}
        >
          <h1 className="text-purple-600 font-bold text-2xl">
            {edge.node.frontmatter.title}
          </h1>
          <p className="text-gray-800 mt-4 text-lg">{edge.node.excerpt}</p>
        </Link>
      )
    })}
  </div>
)
