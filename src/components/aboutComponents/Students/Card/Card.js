import React from "react"
import * as styles from "./card.module.scss"
import { ImQuotesLeft } from "react-icons/im"
// import Img from "gatsby-image"

const Card = ({ text, school, name, img }) => {
  return (
    <div className={styles.card}>
      <ImQuotesLeft color="#901447" size={40} />
      <p>{text}</p>
      {/* <div className={styles.imgWrapper}>
        <Img fluid={img} style={{ height: "100%" }} />
      </div> */}
      <h5>{name}</h5>
      <h6>{school}</h6>
    </div>
  )
}

export default Card
