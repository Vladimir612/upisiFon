import React from "react"
import * as styles from "./button.module.scss"

const Button = ({ type, cb, children, customStyle }) => {
  return (
    <button
      className={
        type === "pink"
          ? `${styles.btn} ${styles.pink}`
          : `${styles.btn} ${styles.yellow}`
      }
      onClick={cb}
      style={{ ...customStyle }}
    >
      {children}
    </button>
  )
}

export default Button
