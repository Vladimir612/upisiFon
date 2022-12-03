import React from "react"
import * as styles from "./detailedPrep.module.scss"
import Title from "./../../utils/Title/Title"
import Subtitle from "./../../utils/Subtitle/Subtitle"
import Circle from "./Circle/Circle"
import { graphql, useStaticQuery } from "gatsby"
import Card from "../../utils/Card/Card"

const DetailedPrep = () => {
  const data = useStaticQuery(graphql`
    query getCardImages {
      firstCard: file(relativePath: { eq: "homePage/firstCard.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      secondCard: file(relativePath: { eq: "homePage/secondCard.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      thirdCard: file(relativePath: { eq: "homePage/thirdCard.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  return (
    <div className={styles.detailedPrep}>
      <Title type="pink" customStyle={{ marginBottom: "0.5rem" }}>
        Cela priprema
      </Title>
      <Subtitle type="pink">Šta je uključeno u cenu cele pripreme?</Subtitle>
      <div className={styles.circles}>
        <div className={`${styles.gridItem} ${styles.item1}`}>
          <Circle
            number="1"
            type="circle1"
            text="Neograničen pristup svim video materijalima"
          />
        </div>
        <div className={`${styles.gridItem} ${styles.item2}`}>
          <Circle
            number="2"
            type="circle2"
            text="Tri simulacije polaganja prijemnog ispita"
          />
        </div>
        <div className={`${styles.gridItem} ${styles.item3}`}>
          <Circle
            number="3"
            type="circle3"
            text="Evaluacija nakon polaganja probnih prijemnih ispita"
          />
        </div>
        <div className={`${styles.gridItem} ${styles.item4}`}>
          <Circle
            number="4"
            type="circle4"
            text="Savetovanje budućih brucoša i praćenje napretka tokom cele pripreme"
          />
        </div>
        <div className={`${styles.gridItem} ${styles.item5}`}>
          <Circle
            number="5"
            type="circle5"
            text="Summer School letnja škola za sve brucoše FON-a"
          />
        </div>
      </div>
      <Title type="pink" customStyle={{ marginBottom: "0.5rem" }}>
        Paket probnih prijemnih
      </Title>
      <Subtitle type="pink">
        Šta je uključeno u cenu paketa probnih prijemnih?
      </Subtitle>
      <div className={styles.cards}>
        <Card
          title="Tri simulacije polaganja prijemnog ispita"
          img={data.firstCard.childImageSharp.gatsbyImageData}
          alt="Polaganje prijemnog"
        />
        <Card
          title="Evaluacija nakon polaganja probnih prijemnih ispita"
          img={data.secondCard.childImageSharp.gatsbyImageData}
          alt="Evaluacija prijemnog"
        />
        <Card
          title="Video materijali sa detaljnim objašnjenjem rešavanja zadataka sa probnih prijemnih ispita"
          img={data.thirdCard.childImageSharp.gatsbyImageData}
          alt="Video materijali"
        />
      </div>
    </div>
  )
}

export default DetailedPrep
