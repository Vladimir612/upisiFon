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
          gatsbyImageData(layout: FIXED)
        }
      }
      secondSummerCard: file(
        relativePath: { eq: "summerSchool/secondCard.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      thirdSummerCard: file(
        relativePath: { eq: "summerSchool/thirdCard.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
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
          img={data.firstSummerCard.childImageSharp.gatsbyImageData}
          alt="Najteži predmeti fon"
        />
        <Card
          title="Savetovanje i usmeravanje studenata ka optimalnom načinu rada i potencijalnim putevima karijere koji ih čekaju."
          img={data.secondSummerCard.childImageSharp.gatsbyImageData}
          alt="Savetovanje i usmeravanje"
        />
        <Card
          title="Povezivanje brucoša sa studentima starijih godina radi razmene iskustva"
          img={data.thirdSummerCard.childImageSharp.gatsbyImageData}
          alt="Povezivanje sa starijim studentima"
        />
      </div>
    </div>
  )
}

export default Content
