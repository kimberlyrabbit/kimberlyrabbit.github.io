import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Poppins, sans-serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#FFA07A",
}
const paragraphStyles = {
  marginBottom: 64,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const linkStyle = {
  color: "#FFA07A",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: "none",
  borderBottom: "2px solid #FFA07A",
}

// data
const email = {
  url: "karabideau@gmail.com",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Kimmy Rabideau
        <br />
        <span style={headingAccentStyles}>Front-End Web Developer</span>
      </h1>
      <p style={paragraphStyles}>
        She <code style={codeStyles}>writes code</code> and stuff.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <a
        style={linkStyle}
        href={`mailto:${email.url}`}
      >
        {email.url}
      </a>
    </main>

  )
}

export default IndexPage
