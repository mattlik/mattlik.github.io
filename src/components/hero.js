import React from "react"
import PropTypes from "prop-types"

import "../components/hero.css"
import Form from "../components/form"

const Header = ({ siteTitle }) => (
  <div className="heroBg">
    <div className="heroOverlay"></div>
    <div className="gridSplit">
      <div className="heroBody">
        <p>Get service from a</p>
        <h1>
          Qualified
          <br /> Plumbing
          <br /> Professional
        </h1>
        <p>It's quick and convenient!</p>
      </div>
      <div className="heroForm">
        <Form />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
