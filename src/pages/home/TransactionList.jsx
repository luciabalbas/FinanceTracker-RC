import React from 'react'

// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  return (
    <ul className={styles.transactions}>
        {transactions.map((trans) => (
            <li key={trans.id}>
                <p className={styles.name}>{trans.name}</p>
                <p className={styles.amount}>{trans.amount}€</p>
            </li>
        ))}
    </ul>
  )
}
