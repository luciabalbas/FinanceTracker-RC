import React from 'react'
import { useFirestore } from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore('transactions')
  console.log(response);
  
  return (
    <ul className={styles.transactions}>
        {transactions.map((trans) => (
            <li key={trans.id}>
                <p className={styles.name}>{trans.name}</p>
                <p className={styles.amount}>{trans.amount}€</p>
                <button onClick={() => deleteDocument(trans.id)}>x</button>
            </li>
        ))}
    </ul>
  )
}
