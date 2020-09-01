import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import SubHeader from "../components/subheader"
import Hero from "../components/hero"
import Content from "../components/content"
import CallToAction from "../components/cta"

const IndexPage = ({ siteTitle }) => (
  <Layout>
    <SEO />
    <Header />
    <SubHeader />
    <Hero />
    <Content />
    <CallToAction />
  </Layout>
)

export default IndexPage
