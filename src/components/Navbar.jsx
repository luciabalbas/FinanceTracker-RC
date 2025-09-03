import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

// style
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <ul>
            <li className={style.title}>myMoney</li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
        </ul>
    </nav>
  )
}
