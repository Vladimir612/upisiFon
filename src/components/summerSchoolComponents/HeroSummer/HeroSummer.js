import React from "react"
import * as styles from "./heroSummer.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "../../utils/Button/Button"

const HeroSummer = () => {
  const data = useStaticQuery(graphql`
    query getHeroSummerImage {
      file(relativePath: { eq: "summerSchool/heroImage.png" }) {
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
          <h1>Summer school</h1>
          <p style={{ marginBottom: "2rem" }}>
            Nakon uspešno položenog prijemnog, sve novoupisane fonovce ocekuje
            mnogo teži zadatak - uspešan početak studija. Kako su razlike u
            predznanju između učenika iz različitih srednjih škola često jako
            izražene, mnogima će prva godina studija predstavljati veliki
            problem.
          </p>
          <p>
            Letnja škola, koju Edukativni centar Binary Bioskop organizuje od
            2019. godine, za cilj ima da brucoše pripremi za uspešan početak
            studija i pomogne im da steknu neophodno predznanje kako bi studije
            na FON-u predstavljale logičan nastavak procesa njihove edukacije.
          </p>
          <div className={styles.row}>
            <p>
              Cena paketa: <span>7.000 dinara</span> <span>4.990 dinara</span>
            </p>
            <Button type="pink">
              <Link to="/buyCourse?summerSchool">KUPI PRIPREMU</Link>
            </Button>
          </div>
        </div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          className={styles.imgWrapper}
          imgStyle={{ objectFit: "contain", objectPosition: "right" }}
          loading="eager"
          alt="Summer school Ilustracija"
        />
      </main>
      <img src="/waveSummer.svg" alt="Waves" className="wave-global" />
    </>
  )
}

export default HeroSummer
