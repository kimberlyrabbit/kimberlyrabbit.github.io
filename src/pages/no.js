// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby"
import Popup from 'reactjs-popup';

// Step 2: Define your component
const imageStyles = {
  padding: 64,
  width: 50,
  height: 50,
}
const NoPage = () => {
  return (
    <main>
      <title>No</title>
      <h1>No</h1>
      <p>No</p>
      <Popup trigger={<button> Trigger</button>} position="right center">
        <img src="/images/icon.png" style={imageStyles} alt="awe and wonder" / >
      </Popup>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

// Step 3: Export your component
export default NoPage
