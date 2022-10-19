import React from "react"
import * as styles from "./students.module.scss"
import Title from "./../../utils/Title/Title"
import Card from "./Card/Card"
import { graphql, useStaticQuery } from "gatsby"

const Students = () => {
  const data = useStaticQuery(graphql`
    query getStudentsImages {
      djak1: file(relativePath: { eq: "aboutPage/vlada.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      djak2: file(relativePath: { eq: "aboutPage/vlada.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      djak3: file(relativePath: { eq: "aboutPage/vlada.png" }) {
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
      <div className={styles.students}>
        <Title type="blue">Šta đaci kažu za nas</Title>
        <div className={styles.cards}>
          <Card
            text="Odlično objašnjena teorija i sve je postupno i lepo odrađeno kod zadataka i primera. Platforma je radila savršeno i u svako doba."
            img={data.djak1.childImageSharp.fluid}
            name="Aleksa Stojanović"
            school="FON"
          />
          <Card
            text="Profesorka je lekcije i zadatke objašnjavala sporo i detaljno i pokazivala nam je dosta trikova koji bi nam mogli pomoći u rešavanju zadataka. "
            img={data.djak1.childImageSharp.fluid}
            name="Ana Ranković"
            school="FON"
          />
          <Card
            text="Veoma lepo organizovan nastavni materijal, sadrži sve što je potrebno za pripremu pa čak i više. Platforma sadrži sve što mislim da je potrebno."
            img={data.djak1.childImageSharp.fluid}
            name="Petar Pavlović"
            school="FON"
          />
        </div>
      </div>
      <img src="/waveTeam.svg" alt="Waves" className="wave-global" />
    </>
  )
}

export default Students
