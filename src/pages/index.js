import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  padding: 96,
  fontFamily: "serif",
}
const noStyles = {
  paddingTop: "666px",
}
const noLinkStyles = {
  color: "#000",
}
const headingStyles = {
  marginTop: 64,
  marginBottom: 64,
  color: "#BC8F8F",
}
const headingAccentStyles = {
  color: "#ee82ee",
  fontSize: "1rem",
}
const paragraphStyles = {
  marginBottom: 64,
}
const codeStyles = {
  color: "#8A6534",
  padding: 64,
  backgroundColor: "#D8BFD8",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const linkStyle = {
  color: "#7FFFD4",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: "none",
  borderBottom: "2px solid #7FFFD4",
}

// data
const email = {
  url: "karabideau@gmail.com",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>There Is No Home</title>
      <h1 style={headingStyles}>
        Hi!!
        <br />
        <span style={headingAccentStyles}>So happy to have you.</span>
      </h1>
      <p style={paragraphStyles}>
        <code style={codeStyles}>This is the website of a girl raised on the internet.</code>{" "}
      </p>
      <a
        style={linkStyle}
        href={`mailto:${email.url}`}
      >
        {email.url}
      </a>
      <div style={noStyles}>
        <Link to="/no/" style={noLinkStyles}>No</Link>
      </div>
    </main>
  )
}

export default IndexPage
