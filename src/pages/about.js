import React from "react"
import Layout from "../components/utils/Layout/Layout"
import HeroAbout from "../components/aboutComponents/HeroAbout/HeroAbout"
import Lecturer from "../components/aboutComponents/Lecturer/Lecturer"
import Students from "../components/aboutComponents/Students/Students"
import PoweredBy from "./../components/aboutComponents/PoweredBy/PoweredBy"
import Team from "../components/aboutComponents/Team/Team"
import { Seo } from "../components/seo"

const About = () => {
  return (
    <Layout>
      <HeroAbout />
      <Lecturer />
      <Students />
      <PoweredBy />
      <Team />
    </Layout>
  )
}

export default About

export const Head = () => <Seo title="UpišiFon.rs | O nama" pathname="about" />
