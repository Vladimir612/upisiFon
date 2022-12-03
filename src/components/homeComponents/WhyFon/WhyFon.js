import React from "react"
import * as styles from "./whyFon.module.scss"
import Title from "./../../utils/Title/Title"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const WhyFon = () => {
  const data = useStaticQuery(graphql`
    query getFonImage {
      file(relativePath: { eq: "homePage/fon.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  return (
    <section className={styles.whyFon}>
      <div className={styles.text}>
        <ul>
          <li>2 studijska programa - IT i menadžment</li>
          <li>Po 6 različitih smerova</li>
          <li>14 studentskih organizacija</li>
          <li>Brojne prakse i saradnje</li>
          <li>Menadžerijade i brojna druga putovanja</li>
          <li>Konekcije za čitav život</li>
          <li>Nezamenljivo iskustvo</li>
          <li>I 1.000.000 mogućnosti</li>
        </ul>
      </div>
      <div className={styles.fonImg}>
        <Title type="pink">Zašto FON?</Title>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          className={styles.imgWrapper}
          imgStyle={{ objectPosition: "center" }}
          alt="Fon Zgrada"
        />
      </div>
    </section>
  )
}

export default WhyFon
