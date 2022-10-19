import React from "react"
import { RiTimerFill } from "react-icons/ri"
import * as styles from "./videoUnit.module.scss"

const VideoUnit = ({ videoSrcURL, videoTitle, time }) => {
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
        <div className={styles.time}>
          <RiTimerFill color="#380456" size={35} />
          <p>{time}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoUnit
