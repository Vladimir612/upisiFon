import React from "react"
import * as styles from "./heroSummer.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../../utils/Button/Button"

const HeroSummer = () => {
  const data = useStaticQuery(graphql`
    query getHeroSummerImage {
      file(relativePath: { eq: "summerSchool/heroImage.png" }) {
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
          <Button type="pink">
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
      <img src="/waveSummer.svg" alt="Waves" className="wave-global" />
    </>
  )
}

export default HeroSummer
