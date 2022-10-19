import React from "react"
import Layout from "../components/utils/Layout/Layout"
import Hero from "../components/homeComponents/Hero/Hero"
import WhyFon from "./../components/homeComponents/WhyFon/WhyFon"
import PrepSection from "../components/homeComponents/PrepSection/PrepSection"
import PricesSection from "../components/homeComponents/PricesSection/PricesSection"
import DetailedPrep from "../components/homeComponents/DetailedPrep/DetailedPrep"
import CallToAction from "../components/homeComponents/CallToAction/CallToAction"
import { Seo } from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhyFon />
      <PrepSection />
      <PricesSection />
      <DetailedPrep />
      <CallToAction />
    </Layout>
  )
}

export const Head = () => <Seo />
