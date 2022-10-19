import React from "react"
import * as styles from "./footer.module.scss"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// import { FaLinkedinIn, FaTiktok } from "react-icons/fa"

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai"

import { BsTelephoneFill } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import { IoIosMail } from "react-icons/io"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query getLogoImage {
      file(relativePath: { eq: "binaryLogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <img
        src="/waveFooter.svg"
        alt="Waves"
        className="wave-global"
        style={{ zIndex: 5, transform: "translateY(4.5rem)" }}
      />
      <footer className={styles.footer} id="contact">
        <div className={styles.logo}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ height: "100%" }}
          />
        </div>
        <div className={styles.contentCenter}>
          <p>U slučaju problema molimo te kontaktiraj nas!</p>
          <div>
            <BsTelephoneFill size={18} color="#fff" />
            <p>066 00 11 00</p>
          </div>
          <div>
            <IoIosMail size={30} color="#fff" />
            <p>binarybioskop@gmail.com</p>
          </div>
          <div>
            <IoLocationSharp size={28} color="#fff" />
            <p>Vojvode Stepe 206, Beograd</p>
          </div>
          <p style={{ marginTop: "2rem" }}>
            Copyright 2022 | All Rights Reserved | Created by Binary bioskop
          </p>
        </div>
        <div className={styles.socialMedia}>
          <a
            href="https://www.instagram.com/binarybioskop/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram
              size={30}
              color="#fff"
              style={{ cursor: "pointer" }}
            />
          </a>
          {/* <a href="" target="_blank" rel="noreferrer">
            <FaTiktok size={30} color="#fff" style={{ cursor: "pointer" }} />
          </a> */}
          <a
            href="https://www.facebook.com/binarybioskop1011"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook
              size={30}
              color="#fff"
              style={{ cursor: "pointer" }}
            />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
