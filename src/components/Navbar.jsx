import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useLogout } from '../hooks/useLogout'

// style
import style from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()

  return (
    <nav className={style.navbar}>
        <ul>
            <li className={style.title}>myMoney</li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><button className="btn" onClick={logout}>Logout</button></li>
        </ul>
    </nav>
  )
}
