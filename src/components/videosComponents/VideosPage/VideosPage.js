import React from "react"
import LearningUnit from "../LearningUnit/LearningUnit"
import * as styles from "./videosPage.module.scss"
import Heading from "./../Heading/Heading"

const VideosPage = () => {
  const videoArr1 = [
    {
      videoSrcURL: "https://www.youtube.com/embed/yKSV0r1mNYI",
      videoTitle: "Uvodni klip FON",
      time: "6:48",
    },
  ]
  const videoArr2 = [
    {
      videoSrcURL: "https://www.youtube.com/embed/cWvbm5iTFyw",
      videoTitle: "01 Brojevi teorija",
      time: "18:29",
    },
    {
      videoSrcURL: "https://www.youtube.com/embed/w-Plfi1zNpg",
      videoTitle: "02 Kompleksni brojevi teorija",
      time: "33:15",
    },
    {
      videoSrcURL: "https://www.youtube.com/embed/SIS2u48d1mM",
      videoTitle: "03 Brojevi primeri 1",
      time: "41:25",
    },
    {
      videoSrcURL: "https://www.youtube.com/embed/d69k8H9iAKg",
      videoTitle: "04 Brojevi primeri 2",
      time: "01:05:41",
    },
    {
      videoSrcURL: "https://www.youtube.com/embed/vUQYsHMWS0k",
      videoTitle: "05 Brojevi reseni zadaci",
      time: "49:48",
    },
    {
      videoSrcURL: "https://www.youtube.com/embed/gF_HtNvA83c",
      videoTitle: "06 Brojevi samostalan rad",
      time: "33:23",
    },
  ]

  const videoArr3 = [
    {
      videoSrcURL: "https://www.youtube.com/embed/1CBCjGYlBJI",
      videoTitle: "07 Polinomi teorija",
      time: "29:56",
    },
    {
      videoSrcURL: "https://www.youtube.com/embed/Zy6iGVHvRis",
      videoTitle: "08 Polinomi primeri",
      time: "42:39",
    },
    {
      videoSrcURL: "https://www.youtube.com/embed/K7MsUQu6NNo",
      videoTitle: "09 Polinomi reseni zadaci",
      time: "37:48",
    },
    {
      videoSrcURL: "https://www.youtube.com/embed/uzwmXrOOho0",
      videoTitle: "10 Polinomi samostalni rad",
      time: "32:23",
    },
  ]
  return (
    <div className={styles.videosPage}>
      <Heading />
      {
        <div className={styles.learningUnits}>
          <LearningUnit unitTitle="UVOD" videosArr={videoArr1} />
          <LearningUnit unitTitle="BROJEVI - 6 lekcija" videosArr={videoArr2} />
          <LearningUnit
            unitTitle="POLINOMI - 4 lekcije"
            videosArr={videoArr3}
          />
        </div>
      }
    </div>
  )
}

export default VideosPage
