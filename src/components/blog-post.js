import React from "react"

import "../styles/style.css"

export default ({ post }) => (
  <div className="max-w-4xl mx-auto p-4">
    <h1 className="text-purple-600 font-bold text-4xl">
      {post.frontmatter.title}
    </h1>
    <div
      className="text-gray-800 mt-8 mb-24 text-lg"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  </div>
)
