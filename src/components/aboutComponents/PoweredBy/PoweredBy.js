import React from "react"
import * as styles from "./poweredBy.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const PoweredBy = () => {
  const data = useStaticQuery(graphql`
    query getHeroPoweredImage {
      file(relativePath: { eq: "aboutPage/binaryPowered.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.poweredTxt}>POWERED BY</p>
        <h1>Binary bioskop</h1>
        <p style={{ marginBottom: "2rem" }}>
          Binary bioskop nastaje 2018. godine kada njegov je osnivač, Bojan
          Martinović odlučio da svoju ljubav prema držanju časova unapredi na
          veći nivo. Radi se o habu sa 32 računara za interaktinvno učenje u
          blizini FON-a, koji je od osnivanja imao više od 15000 poseta. Hab
          danas broji preko 30 kurseva ukupno.
        </p>
        <p>
          Binary Bioskop je za relativno kratko vreme svog postojanja prepoznat
          među studentima kao najkvalitetniji i najpraktičniji vid priprema za
          ispite. Stekao je poverenje više od 1200 studenta koji mu se, nakon
          uspešnih rezultata na ispitima, rado vraćaju kao sigurnom pomoćniku za
          pripremu predstojećih ispita.
        </p>
        <p>
          Od marta 2020. godine, kao odgovor na pandemiju, a u cilju pružanja
          mogućnosti studentima da i dalje prate naše pripreme na bezbedan
          način, razvijena je online platforma Binary Bioskopa, koja omogućava
          interaktivan i neograničen pristup video materijalima. Time je
          obezbeđeno da studenti mogu da prate pripreme u udobnosti svoga doma,
          u vreme koje njima najviše odgovara.
        </p>
      </div>
      <div className={styles.imgWrapper}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ height: "100%" }}
        />
      </div>
    </section>
  )
}

export default PoweredBy
