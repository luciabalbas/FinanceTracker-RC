import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

// components
import TransactionForm from './TransationForm'

//style
import styles from './Home.module.css'

export default function Home() {
  const { user } = useAuthContext()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction list
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
