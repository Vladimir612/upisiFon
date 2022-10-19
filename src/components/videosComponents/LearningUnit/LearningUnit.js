import React, { useState } from "react"
import * as styles from "./learningUnit.module.scss"
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs"
import VideoUnit from "./VideoUnit/VideoUnit"

const LearningUnit = ({ unitTitle, videosArr }) => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.learningUnit}>
      <div className={styles.topRow}>
        <h3>{unitTitle}</h3>
        {!active ? (
          <BsFillArrowDownCircleFill
            size={35}
            onClick={() => setActive(true)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <BsFillArrowUpCircleFill
            size={35}
            onClick={() => setActive(false)}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {active && (
        <div className={styles.content}>
          {videosArr.map(video => (
            <VideoUnit {...video} />
          ))}
        </div>
      )}
    </div>
  )
}

export default LearningUnit
