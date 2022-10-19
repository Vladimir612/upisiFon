import React from "react"
import * as styles from "./heroAbout.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../../utils/Button/Button"

const HeroAbout = () => {
  const data = useStaticQuery(graphql`
    query getHeroAboutImage {
      file(relativePath: { eq: "aboutPage/heroImage.png" }) {
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
        <div className={styles.imgWrapper}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
        </div>
        <div className={styles.text}>
          <h1>UpisiFon.rs</h1>
          <p style={{ marginBottom: "2rem" }}>
            Želiš li da upišeš FON, jedan od najtraženijih fakulteta? Ako je
            odgovor DA, onda je jedino što deli tebe i početak tvog nezaboravnog
            akademskog putovanja jeste taj "strašni" prijemni iz matematike o
            kome svi pričaju.
          </p>
          <p>
            Uz pomoć naših klipova, materijala i uz nasu podršku, ćes se sa
            lakoćom pripremiti da savladaš tih 20 pitanja koje ce ti omogućiti
            da uzmes indeks tvog željenog fakulteta, FON-a. A sve iz udobnosti
            svoga doma i uz sopstvenu organizaciju vremena i tempa rada.
          </p>
          <Button type="pink">
            <Link to="/buyCourse">KUPI PRIPREMU</Link>
          </Button>
        </div>
      </main>
      <img src="/waveAbout.svg" alt="Waves" className="wave-global" />
    </>
  )
}

export default HeroAbout
