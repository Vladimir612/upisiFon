import React from "react"
import * as styles from "./video.module.scss"

const Video = ({ videoSrcURL, videoTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.video}>
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
      <div className={styles.title}>
        <h4>{videoTitle}</h4>
      </div>
    </div>
  )
}

export default Video
