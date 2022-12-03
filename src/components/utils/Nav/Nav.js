import React, { useState } from "react"
import * as styles from "./nav.module.scss"
import { useEffect } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { motion } from "framer-motion"

const Nav = () => {
  const location = typeof window !== "undefined" ? window.location : ""
  const [activePage, setActivePage] = useState(-1)

  const [menuOpen, setMenuOpen] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        switch (location.hash) {
          case "#cenovnik":
            setActivePage(1)
            break
          case "#contact":
            setActivePage(2)
            break
          default:
            setActivePage(0)
        }
        break
      case "/about":
      case "/about/":
        setActivePage(3)
        break
      case "/videos":
      case "/videos/":
        setActivePage(4)
        break
      case "/summerSchool":
      case "/summerSchool/":
        setActivePage(5)
        break
      default:
        setActivePage(6)
        break
    }
  }, [location.hash, location.pathname])

  return (
    <nav
      className={
        activePage === 3
          ? `${styles.nav} ${styles.secondStyle}`
          : activePage === 4
          ? `${styles.nav} ${styles.thirdStyle}`
          : activePage === 5
          ? `${styles.nav} ${styles.fourthStyle}`
          : `${styles.nav} ${styles.firstStyle}`
      }
    >
      <div className={styles.logo}>
        <img
          src={
            activePage === 4 || activePage === 5
              ? "/logoNav2.png"
              : "/logoNav1.png"
          }
          alt="Upisi Fon Logo 2"
          className={styles.logoImg}
        />
      </div>
      <div
        className={`${
          menuOpen
            ? styles.responsiveMenu + " " + styles.open
            : styles.responsiveMenu
        }`}
      >
        <div className={styles.links}>
          <button
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <Link to="/" className={activePage === 0 ? styles.activeLink : ""}>
              Početna
            </Link>
          </button>
          <button
            onClick={() => {
              setActivePage(1)
              setMenuOpen(false)
            }}
          >
            <AnchorLink
              to="/#cenovnik"
              className={activePage === 1 ? styles.activeLink : ""}
            >
              Cenovnik
            </AnchorLink>
          </button>
          <button
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <Link
              to="/about"
              className={activePage === 3 ? styles.activeLink : ""}
            >
              O nama
            </Link>
          </button>
          <button
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <Link
              to="/videos"
              className={activePage === 4 ? styles.activeLink : ""}
            >
              Klipovi
            </Link>
          </button>
          <button
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <Link
              to="/summerSchool"
              className={activePage === 5 ? styles.activeLink : ""}
            >
              Summer school
            </Link>
          </button>
          <button
            onClick={() => {
              setActivePage(2)
              setMenuOpen(false)
            }}
          >
            <AnchorLink
              to="/#contact"
              className={activePage === 2 ? styles.activeLink : ""}
            >
              Kontakt
            </AnchorLink>
          </button>
        </div>
        <button
          onClick={() => {
            setMenuOpen(false)
          }}
          className={styles.contactBtn}
        >
          <Link to="/buyCourse">KUPI PRIPREMU</Link>
        </button>
      </div>
      <button
        className={styles.hamburgerMenu}
        onClick={() => {
          setMenuOpen(!menuOpen)
          setShouldAnimate(true)
        }}
      >
        <motion.div
          className={styles.line}
          animate={
            shouldAnimate && {
              y: menuOpen
                ? ["0rem", "0.4rem", "0.4rem"]
                : ["0.4rem", "0.4rem", "0rem"],
              rotate: menuOpen ? [0, 0, 45] : [45, 0, 0],
            }
          }
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className={styles.line}
          animate={
            shouldAnimate && {
              opacity: menuOpen ? [1, 0, 0] : [0, 0, 1],
            }
          }
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className={styles.line}
          animate={
            shouldAnimate && {
              y: menuOpen
                ? ["0rem", "-0.4rem", "-0.4rem"]
                : ["-0.4rem", "-0.4rem", "0rem"],
              rotate: menuOpen ? [0, 0, -45] : [-45, 0, 0],
            }
          }
          transition={{ duration: 0.5 }}
        ></motion.div>
      </button>
    </nav>
  )
}

export default Nav
