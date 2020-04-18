import React from "react"

export default ({ data }) => {
  const uniqueTags = new Set()
  data.allMarkdownRemark.edges.forEach((edge) =>
    edge.node.frontmatter.tags.forEach((tag) => uniqueTags.add(tag))
  )

  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-8 lg:mt-24">
      {[...uniqueTags].map((tag) => (
        <button>{tag}</button>
      ))}
    </div>
  )
}
