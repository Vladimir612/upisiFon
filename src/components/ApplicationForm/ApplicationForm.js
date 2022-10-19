import React, { useState, useEffect } from "react"
import * as styles from "./applicationForm.module.scss"
import Subtitle from "./../utils/Subtitle/Subtitle"
import { validateEmail } from "./validation"
import axios from "axios"
import { Link } from "gatsby"
// import {
//   BsFillArrowDownCircleFill,
//   BsFillArrowUpCircleFill,
// } from "react-icons/bs"

const ApplicationForm = () => {
  // const [university, setUniversity] = useState("")
  // const [faculty, setFaculty] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const [numOfPeople, setNumOfPeople] = useState(3)

  // const [activeInputOne, setActiveInputOne] = useState(false)
  // const [activeInputTwo, setActiveInputTwo] = useState(false)

  const [radioGroupOne, setRadioGroupOne] = useState(1)
  const [radioGroupTwo, setRadioGroupTwo] = useState(2)

  const [promoCode, setPromoCode] = useState("")

  const [price, setPrice] = useState(24000)

  const [members, setMembers] = useState([
    { fullName: "", email: "", phone: "", error: "" },
  ])

  const handleFormChange = (index, event) => {
    let data = [...members]
    data[index][event.target.name] = event.target.value
    setMembers(data)
  }

  useEffect(() => {
    let arr = []
    if (numOfPeople) {
      for (let i = 0; i < numOfPeople; i++) {
        let newMember = { fullName: "", email: "", phone: "", error: "" }
        arr.push(newMember)
      }
    } else {
      for (let i = 0; i < 3; i++) {
        let newMember = { fullName: "", email: "", phone: "", error: "" }
        arr.push(newMember)
      }
    }

    setMembers(arr)

    if (numOfPeople <= 2) {
      setRadioGroupTwo(1)
      if (radioGroupOne === 1) {
        setPrice(27000)
      } else {
        setPrice(4000)
      }
    } else if (numOfPeople > 2 && numOfPeople < 5) {
      setRadioGroupTwo(2)
      if (radioGroupOne === 1) {
        setPrice(24000)
      } else {
        setPrice(3500)
      }
    } else if (numOfPeople >= 5) {
      setRadioGroupTwo(3)
      if (radioGroupOne === 1) {
        setPrice(22000)
      } else {
        setPrice(3000)
      }
    }
  }, [numOfPeople, radioGroupOne])

  // const universities = ["beogradski univerzitet", "niški univerzitet"]

  // const facultiesBel = ["ekof", "fon", "grf", "matf", "rgf", "sf"]
  // const facultiesNis = ["eknfak", "elfak", "masfak", "pmf", "tf"]

  const handleSubmit = () => {
    let errors = false
    let data = [
      ...members.map(member => {
        if (!member["fullName"] || !member["email"] || !member["phone"]) {
          member["error"] = "Nisu uneti svi podaci!"
          errors = true
        } else if (!validateEmail(member["email"])) {
          member["error"] = "Mejl nije validan!"
          errors = true
        } else {
          member["error"] = "Mejl nije validan!"
          errors = false
        }

        return member
      }),
    ]

    setMembers(data)

    if (!errors) {
      let postBody = {
        application: {
          tipKupovine1:
            radioGroupOne === 1 ? "Celu pripremu" : "Paket probnih prijemnih",
          tipKupovine2:
            radioGroupTwo === 1
              ? "Individualna prijava"
              : radioGroupTwo === 2
              ? "Grupna prijava (3+ osobe)"
              : "Grupna prijava (5+ osobe)",
          brojClanova: numOfPeople,
          ukupnaCena: price,
          promoKod: promoCode,
          clanovi: members,
        },
      }

      setSubmitted(true)

      axios
        .post(
          "https://upisifon-mailsender.herokuapp.com/api/application",
          postBody
        )
        .catch(e => {
          console.log(e)
        })
    }
  }

  return (
    <div className={styles.applicationForm}>
      {submitted ? (
        <div className={styles.successMsg}>
          <h1>Hvala Vam! Kupovina je uspešno obavljena.</h1>
          <p>
            U najskorije vreme će Vas kontaktirati neko iz Binary bioskop tima!
          </p>
          <button>
            <Link to="/">POČETNA</Link>
          </button>
        </div>
      ) : (
        <>
          <Subtitle type="pink">Unesite svoje podatke</Subtitle>
          <form>
            {/* <button
          type="button"
          className={`${styles.selectInput} ${
            activeInputOne && styles.activeTrue
          }`}
          onClick={() => setActiveInputOne(!activeInputOne)}
        >
          <p>{university !== "" ? university : "Izaberi univerzitet*"}</p>
          {!activeInputOne ? (
            <BsFillArrowDownCircleFill size={30} />
          ) : (
            <BsFillArrowUpCircleFill size={30} />
          )}
          <ul className={styles.choices}>
            {universities.map((u, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => {
                    setUniversity(u)
                    setFaculty("")
                  }}
                >
                  {u}
                </button>
              </li>
            ))}
          </ul>
        </button>
        <button
          type="button"
          className={`${styles.selectInput} ${
            activeInputTwo && styles.activeTrue
          }`}
          onClick={() => setActiveInputTwo(!activeInputTwo)}
        >
          <p>{faculty !== "" ? faculty : "Izaberi fakultet*"}</p>
          {!activeInputTwo ? (
            <BsFillArrowDownCircleFill size={30} />
          ) : (
            <BsFillArrowUpCircleFill size={30} />
          )}
          <ul className={styles.choices}>
            {university === "beogradski univerzitet"
              ? facultiesBel.map((fB, index) => (
                  <li key={index}>
                    <button type="button" onClick={() => setFaculty(fB)}>
                      {fB}
                    </button>
                  </li>
                ))
              : facultiesNis.map((fN, index) => (
                  <li key={index}>
                    <button type="button" onClick={() => setFaculty(fN)}>
                      {fN}
                    </button>
                  </li>
                ))}
          </ul>
        </button> */}

            <div className={styles.radioGroup}>
              <p className={styles.radioHeading}>Kupujem: </p>
              <div className={styles.radioBtn}>
                <button
                  type="button"
                  className={`${styles.circle} ${
                    radioGroupOne === 1 && styles.activeTrue
                  }`}
                  onClick={() => setRadioGroupOne(1)}
                >
                  a
                </button>
                <p>Celu pripremu</p>
              </div>
              <div className={styles.radioBtn}>
                <button
                  type="button"
                  className={`${styles.circle} ${
                    radioGroupOne === 2 && styles.activeTrue
                  }`}
                  onClick={() => setRadioGroupOne(2)}
                >
                  a
                </button>
                <p>Paket probnih prijemnih</p>
              </div>
            </div>

            <div className={styles.radioGroup}>
              <p className={styles.radioHeading}>Način prijave: </p>
              <div className={styles.radioBtn}>
                <button
                  type="button"
                  className={`${styles.circle} ${
                    radioGroupTwo === 1 && styles.activeTrue
                  }`}
                  onClick={() => {
                    setRadioGroupTwo(1)
                    setNumOfPeople(1)
                  }}
                >
                  a
                </button>
                <p>Individualna prijava</p>
              </div>
              <div className={styles.radioBtn}>
                <button
                  type="button"
                  className={`${styles.circle} ${
                    radioGroupTwo === 2 && styles.activeTrue
                  }`}
                  onClick={() => {
                    setRadioGroupTwo(2)
                    setNumOfPeople(3)
                  }}
                >
                  a
                </button>
                <p>Grupna prijava (3+ osobe)</p>
              </div>
              <div className={styles.radioBtn}>
                <button
                  type="button"
                  className={`${styles.circle} ${
                    radioGroupTwo === 3 && styles.activeTrue
                  }`}
                  onClick={() => {
                    setRadioGroupTwo(3)
                    setNumOfPeople(5)
                  }}
                >
                  a
                </button>
                <p>Grupna prijava (5+ osobe)</p>
              </div>
            </div>

            <div className={styles.numPeople}>
              <h4>Broj članova: </h4>
              <div className={styles.inputField}>
                <input
                  type="text"
                  value={numOfPeople}
                  onChange={e =>
                    e.target.value
                      ? setNumOfPeople(parseInt(e.target.value))
                      : setNumOfPeople(e.target.value)
                  }
                />
                <div className={styles.btnGroup}>
                  <button
                    type="button"
                    className={styles.btnNum}
                    onClick={() => setNumOfPeople(nP => nP + 1)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className={styles.btnNum}
                    onClick={() => setNumOfPeople(nP => nP - 1)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.members}>
              {numOfPeople === "1" || numOfPeople === 1
                ? members.map((input, index) => {
                    return (
                      <div key={index} className={styles.member}>
                        <input
                          name="fullName"
                          placeholder="Ime i prezime*"
                          value={input.fullName}
                          onChange={event => handleFormChange(index, event)}
                        />
                        <input
                          name="email"
                          placeholder="Email*"
                          value={input.email}
                          onChange={event => handleFormChange(index, event)}
                        />
                        <input
                          name="phone"
                          placeholder="Broj telefona*"
                          value={input.phone}
                          onChange={event => handleFormChange(index, event)}
                        />
                        <h5 className={styles.errorMsg}>{input.error}</h5>
                      </div>
                    )
                  })
                : members.map((input, index) => {
                    return (
                      <div className={styles.member} key={index}>
                        <h3 className={input.error && styles.error}>
                          {index + 1}. Član
                        </h3>
                        <div>
                          <input
                            name="fullName"
                            placeholder="Ime i prezime*"
                            value={input.fullName}
                            onChange={event => handleFormChange(index, event)}
                          />
                          <input
                            name="email"
                            placeholder="Email*"
                            value={input.email}
                            onChange={event => handleFormChange(index, event)}
                          />
                          <input
                            name="phone"
                            placeholder="Broj telefona*"
                            value={input.phone}
                            onChange={event => handleFormChange(index, event)}
                          />
                        </div>
                        <h5 className={styles.errorMsg}>{input.error}</h5>
                      </div>
                    )
                  })}
            </div>
            <div className={styles.inputPromo}>
              <h4>Promo kod: </h4>
              <input
                type="text"
                name="promo"
                placeholder="Promo kod (nije obavezno)"
                value={promoCode}
                onChange={e => setPromoCode(e.target.value)}
              />
            </div>

            <div className={styles.submit}>
              <h3>
                UKUPNA CENA:{" "}
                <span>
                  {price} dinara {numOfPeople > 1 && "po osobi"}
                </span>
              </h3>
              <button type="button" onClick={handleSubmit}>
                KUPI
              </button>
              <p>
                Nakon prijave ce Vas kontaktirati neko iz BinaryBioskop tima!
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default ApplicationForm
