import { Link } from "gatsby"
import React from "react"
import Button from "../utils/Button/Button"
import * as styles from "./notFound.module.scss"

const NotFound = () => {
  return (
    <div className={styles.notFoundScreen}>
      <div className={styles.numbers404}>
        <p className={styles.four}>4</p>
        <div className={styles.eyelid}>
          <div className={styles.zero}>
            <div className={styles.pupil}></div>
          </div>
        </div>
        <p className={styles.four}>4</p>
      </div>
      <p className={styles.text}>Nažalost nemamo stranicu na ovoj adresi</p>
      <Button type="pink">
        <Link to="/">POČETNA</Link>
      </Button>
    </div>
  )
}

export default NotFound
