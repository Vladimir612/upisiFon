import React from "react"
import * as styles from "./heading.module.scss"
import Title from "./../../utils/Title/Title"
import Button from "./../../utils/Button/Button"
import Subtitle from "./../../utils/Subtitle/Subtitle"
import { Link } from "gatsby"

const Heading = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.headingAndBtn}>
        <Title type="pink">Priprema za prijemni</Title>
        <Button type="pink" customStyle={{ margin: 0 }}>
          <Link to="/buyCourse">KUPI PRIPREMU</Link>
        </Button>
      </div>
      <Subtitle type="pink" customStyle={{ margin: 0 }}>
        Napomena: Dozvoljen je pristup platformi isključivo sa jednog uređaja,
        iz Google Chrome browser-a. Za promenu uređaja nam se prethodno javite
        na broj 066001100.
      </Subtitle>
    </div>
  )
}

export default Heading
