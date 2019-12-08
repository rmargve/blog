import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

const Layout = ({ children }) => {
  return (
    <div className="bg-teal-100 min-h-screen min-w-screen p-2">{children}</div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
