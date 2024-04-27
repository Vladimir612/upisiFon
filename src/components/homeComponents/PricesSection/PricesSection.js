import React from "react"
import Title from "../../utils/Title/Title"
import Subtitle from "./../../utils/Subtitle/Subtitle"
import PriceCard from "./PriceCard/PriceCard"

import * as styles from "./pricesSection.module.scss"

const PricesSection = () => {
  return (
    <>
      <section className={styles.pricesSection} id="cenovnik">
        <Title type="pink" customStyle={{ marginBottom: "0.5rem" }}>
          Cenovnik
        </Title>
        <Subtitle type="pink">
          UpisiFon.rs nudi nekoliko opcija prijave i kupovine pripreme!
        </Subtitle>
        <div className={styles.cards}>
          <PriceCard
            svg="/pricesFirst.svg"
            title="INDIVIDUALNA PRIJAVA"
            price1="27000"
            price2="5000"
          />
          <PriceCard
            svg="/pricesSecond.svg"
            title="grupna prijava (3+ osobe)"
            price1="24000"
            price2="4500"
          />
          <PriceCard
            svg="/pricesThird.svg"
            title="grupna prijava (5+ osoba)"
            price1="22000"
            price2="4000"
          />
        </div>
      </section>
      <img src="/wavePrices.svg" alt="Waves" className="wave-global" />
    </>
  )
}

export default PricesSection
