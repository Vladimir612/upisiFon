import React from "react"
import Layout from "../components/utils/Layout/Layout"
import VideosPage from "../components/videosComponents/VideosPage/VideosPage"
import { Seo } from "../components/seo"

const Videos = () => {
  return (
    <Layout>
      <VideosPage />
    </Layout>
  )
}

export default Videos

export const Head = () => (
  <Seo title="UpisiFon.rs | Klipovi" pathname="videos" />
)
