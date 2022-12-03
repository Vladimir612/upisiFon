import React from "react"
import * as styles from "./card.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

const Card = ({ img, title, alt }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <GatsbyImage
        image={img}
        className={styles.imgWrapper}
        imgStyle={{ objectFit: "contain" }}
        alt={alt}
      />
    </div>
  )
}

export default Card
