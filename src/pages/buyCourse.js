import React from "react"
import Layout from "../components/utils/Layout/Layout"
import ApplicationForm from "../components/ApplicationForm/ApplicationForm"
import { Seo } from "../components/seo"

const BuyCourse = () => {
  return (
    <Layout>
      <ApplicationForm />
    </Layout>
  )
}

export default BuyCourse

export const Head = () => (
  <Seo title="UpisiFon.rs | Kupovina" pathname="buyCourse" />
)
