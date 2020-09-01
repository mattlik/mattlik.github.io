import React from "react"
import { Link } from "gatsby"

import "../components/header.css"

export default function SubHeader() {
  return (
    <div className="pageHeader--Sub">
      <div className="container">
        <div className="pageHeader--Sub">
          <ul className="btn-list">
            <li>
              <Link to="/" className="heroBtn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="heroBtn">
                Plumbing Services
              </Link>
            </li>
            <li>
              <Link to="/" className="heroBtn">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
