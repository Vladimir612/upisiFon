import React from "react"
import Layout from "../components/utils/Layout/Layout"
import HeroSummer from "../components/summerSchoolComponents/HeroSummer/HeroSummer"
import Content from "../components/summerSchoolComponents/Content/Content"
import { Seo } from "../components/seo"

const SummerSchool = () => {
  return (
    <Layout>
      <HeroSummer />
      <Content />
    </Layout>
  )
}

export default SummerSchool

export const Head = () => (
  <Seo title="UpišiFon.rs | SummerSchool" pathname="summerSchool" />
)
