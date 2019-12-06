import React from "react"
import PropTypes from "prop-types"

import "../styles/style.css"

import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <div className="bg-teal-100 min-h-screen min-w-screen p-2">
      <Nav />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
