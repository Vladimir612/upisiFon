import React from "react"
import Title from "../../utils/Title/Title"
import Video from "../../utils/Video/Video"
import * as styles from "./callToAction.module.scss"
import Subtitle from "./../../utils/Subtitle/Subtitle"
import Button from "./../../utils/Button/Button"
import { Link } from "gatsby"

const CallToAction = () => {
  return (
    <div className={styles.container}>
      <Title type="pink" customStyle={{ marginBottom: "0.5rem" }}>
        Još uvek razmišljaš o kupovini?
      </Title>
      <Subtitle type="pink">
        Uveri se koliko te kvalitetnog materijala čeka!
      </Subtitle>
      <div className={styles.videos}>
        <Video
          videoTitle="UVOD"
          videoSrcURL="https://www.youtube.com/embed/yKSV0r1mNYI"
        />
        <Video
          videoTitle="BROJEVI"
          videoSrcURL="https://www.youtube.com/embed/cWvbm5iTFyw"
        />
        <Video
          videoTitle="POLINOMI"
          videoSrcURL="https://www.youtube.com/embed/1CBCjGYlBJI"
        />
      </div>
      <div className={styles.txtAndBtn}>
        <Subtitle type="pink" customStyle={{ margin: 0 }}>
          Jos besplatnih klipova i detaljan sadrzaj pripreme pogledaj ovde:
        </Subtitle>
        <Button type="pink" customStyle={{ margin: 0 }}>
          <Link to="/buyCourse">KUPI PRIPREMU</Link>
        </Button>
      </div>
    </div>
  )
}

export default CallToAction
