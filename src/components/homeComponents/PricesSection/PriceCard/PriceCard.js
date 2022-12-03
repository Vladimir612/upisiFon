import React from "react"
import * as styles from "./priceCard.module.scss"

const PriceCard = ({ svg, title, price1, price2 }) => {
  return (
    <div className={styles.priceCard}>
      <img src={svg} alt={title} />
      <h4>{title}</h4>
      <p className={styles.txtBold}>CELA PRIPREMA</p>
      <p className={styles.txtPrice}>{price1}</p>
      <p className={styles.txtBold}>PAKET PROBNIH PRIJEMNIH</p>
      <p className={styles.txtPrice}>{price2}</p>
    </div>
  )
}

export default PriceCard
