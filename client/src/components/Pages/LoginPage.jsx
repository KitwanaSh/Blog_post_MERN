import React from 'react'

export default function LoginPage() {
  return (
    <form className='login'>
        <h1>Login Form</h1>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button>Login</button>
    </form>
  )
}
