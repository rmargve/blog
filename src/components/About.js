import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTelegram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "beauty.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      site {
        siteMetadata {
          author
          github
          telegram
          twitter
          mail
        }
      }
    }
  `)

  return (
    <div className="xl:fixed inline-block text-teal-600 m-8 lg:m-16 xl:m-24">
      <Img
        className="w-24 h-24 rounded-full"
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Rom Midnight"
      />
      <h1 className="font-bold text-2xl mt-4">
        {data.site.siteMetadata.author}
      </h1>
      <div>
        <a
          href={data.site.siteMetadata.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} size="2x" className="mt-4" />
        </a>
        <a
          href={data.site.siteMetadata.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="ml-6" />
        </a>
        <a
          href={data.site.siteMetadata.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" className="ml-6" />
        </a>
        <a href={`mailto:${data.site.siteMetadata.mail}`}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="ml-6" />
        </a>
      </div>
    </div>
  )
}
