import React from "react"
import * as styles from "./hero.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "../../utils/Button/Button"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query getHeroImage {
      file(relativePath: { eq: "homePage/heroImage.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
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
          <div className={styles.btnWrapper}>
            <Button type="yellow">
              <Link to="/buyCourse">KUPI PRIPREMU</Link>
            </Button>
          </div>
        </div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          className={styles.imgWrapper}
          imgStyle={{ objectFit: "contain", objectPosition: "right" }}
          loading="eager"
          alt="Upisi Fon Ilustracija"
        />
      </main>
      <img src="/wave1.svg" alt="Waves" className="wave-global" />
    </>
  )
}

export default Hero
