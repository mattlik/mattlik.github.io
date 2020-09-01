import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import SubHeader from "../components/subheader"

const IndexPage = ({ siteTitle }) => (
  <Layout>
    <SEO />
    <Header />
    <SubHeader />
    <div
      style={{
        width: `100%`,
        minHeight: `80vh`,
        display: `flex`,
        justifyContent: `center`,
        alignContent: `center`,
        alignItems: `center`,
        textAlign: `center`,
      }}
    >
      <div>
        <h1>THANK YOU</h1>
        <p>Someone will be in touch with you soon</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
