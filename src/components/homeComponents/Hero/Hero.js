import React from "react"
import * as styles from "./hero.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../../utils/Button/Button"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query getHeroImage {
      file(relativePath: { eq: "homePage/heroImage.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <main className={styles.hero}>
        <div className={styles.text}>
          <h2>DOBRODOŠLI!</h2>
          <h1>UpišiFon.rs</h1>
          <p>Prijemni kod nas spremi i nećeš biti u dilemi</p>
          <Button type="yellow">
            <Link to="/buyCourse">KUPI PRIPREMU</Link>
          </Button>
        </div>
        <div className={styles.imgWrapper}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
        </div>
      </main>
      <img src="/wave1.svg" alt="Waves" className="wave-global" />
    </>
  )
}

export default Hero
