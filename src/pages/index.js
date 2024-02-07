import * as React from "react"
import { Link } from "gatsby"

var $rosybrown = "#BC8F8F";
var $violet = "#ee82ee";
var $thistle = "#D8BFD8";
var $peachpuff = "#FFDAB9";
var $aquamarine = "#7FFFD4";
var $firebrick = "#b22222";
var $colorMain = $rosybrown;
var $colorSecondary = $violet;
var $colorLink = $aquamarine;
var $colorRed = $firebrick;

// styles
const pageStyles = {
  padding: 96,
  fontFamily: "serif",
}
const noStyles = {
  paddingTop: "666px",
}
const aboutStyles = {
  color: $colorSecondary,
  float: 0,
  fontWeight: "bold",
  textTransform: "uppercase",
}
const noLinkStyles = {
  color: $colorRed,
}
const headingStyles = {
  marginTop: 64,
  marginBottom: 64,
  color: $colorMain,
}
const headingAccentStyles = {
  color: $colorSecondary,
  fontSize: "1rem",
}
const paragraphStyles = {
  marginBottom: 64,
}
const codeStyles = {
  color: $peachpuff,
  padding: 64,
  backgroundColor: $thistle,
  fontSize: "1.25rem",
  borderRadius: 4,
}

const linkStyle = {
  color: $colorLink,
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: "none",
  borderBottom: "3px solid " + $colorLink,
}

// data
const email = {
  url: "kimberlyxrabbit@gmail.com",
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
      <div style={aboutStyles}>
        <Link to="/about/" style={noLinkStyles}>About</Link>
      </div>
      <div style={noStyles}>
        <Link to="/no/" style={noLinkStyles}>No</Link>
      </div>
    </main>
  )
}

export default IndexPage
