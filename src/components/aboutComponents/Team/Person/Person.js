import React from "react"
import * as styles from "./person.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

import { FaLinkedinIn } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

const Person = ({ img, name, role, about, linkedIn, gmail }) => {
  return (
    <div className={styles.person}>
      <div className={styles.left}>
        <GatsbyImage image={img} className={styles.imgWrapper} alt={name} />
        <h5>{name}</h5>
        <h6>{role}</h6>
        <div className={styles.socialMedia}>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <FaLinkedinIn
              size={35}
              color="#FF4081"
              style={{ cursor: "pointer" }}
            />
          </a>
          <a href={`mailto: ${gmail}`} target="_blank" rel="noreferrer">
            <IoIosMail
              size={40}
              color="#FF4081"
              style={{ cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
      <p>{about}</p>
    </div>
  )
}

export default Person
