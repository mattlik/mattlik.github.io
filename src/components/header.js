import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import "../components/header.css"

export default function Header() {
  return (
    <header className="pageHeader">
      <div className="container">
        <div className="pageHeader--Title">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <span className="pageHeader--TitleMain">
              Affordable Local Plumbers
            </span>
            <span className="pageHeader--TitleDesc">
              We'll find the right plumber for your job
            </span>
          </Link>
        </div>
        <div className="pageHeader--Phone">
          <Link to="tel:18189276188">(818) 927-6188</Link>
        </div>
      </div>
    </header>
  )
}
