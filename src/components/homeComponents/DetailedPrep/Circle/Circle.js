import React from "react"
import * as styles from "./circle.module.scss"

const Circle = ({ number, type, text }) => {
  return (
    <div className={`${styles.circle} ${styles[type]}`}>
      <div className={styles.num}>{number}</div>
      <p>{text}</p>
    </div>
  )
}

export default Circle
