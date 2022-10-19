import React from "react"
import * as styles from "./priceCard.module.scss"

const PriceCard = ({ svg, title, price1, price2 }) => {
  return (
    <div className={styles.priceCard}>
      <img src={svg} alt="Waves" className="wave-global" />
      <h4>{title}</h4>
      <h5>CELA PRIPREMA</h5>
      <p>{price1}</p>
      <h5>PAKET PROBNIH PRIJEMNIH</h5>
      <p>{price2}</p>
    </div>
  )
}

export default PriceCard
