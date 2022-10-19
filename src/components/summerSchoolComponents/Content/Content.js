import React from "react"
import Title from "../../utils/Title/Title"
import Card from "../../utils/Card/Card"
import * as styles from "./content.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Content = () => {
  const data = useStaticQuery(graphql`
    query getSummerImages {
      firstSummerCard: file(
        relativePath: { eq: "summerSchool/firstCard.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondSummerCard: file(
        relativePath: { eq: "summerSchool/secondCard.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thirdSummerCard: file(
        relativePath: { eq: "summerSchool/thirdCard.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.content}>
      <Title type="pink">Sadržaj letnje škole obuhvata</Title>
      <div className={styles.cards}>
        <Card
          title="Pripreme iz najtežih predmeta prve godine"
          img={data.firstSummerCard.childImageSharp.fluid}
        />
        <Card
          title="Savetovanje i usmeravanje studenata ka optimalnom načinu rada i potencijalnim putevima karijere koji ih čekaju."
          img={data.secondSummerCard.childImageSharp.fluid}
        />
        <Card
          title="Povezivanje brucoša sa studentima starijih godina radi razmene iskustva"
          img={data.thirdSummerCard.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

export default Content
