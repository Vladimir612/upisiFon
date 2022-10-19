import React from "react"
import * as styles from "./card.module.scss"
import Img from "gatsby-image"

const Card = ({ img, title }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <div className={styles.imgWrapper}>
        <Img fluid={img} style={{ height: "100%" }} />
      </div>
    </div>
  )
}

export default Card
