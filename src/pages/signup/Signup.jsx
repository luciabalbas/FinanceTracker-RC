import React, { useState } from 'react'

// style
import style from './Signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, username)
    setEmail('')
    setPassword('')
    setUsername('')
  }

  return (
    <form className={style['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input 
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Username:</span>
        <input 
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>
      <button className='btn'>Signup</button>
    </form>
  )
}
