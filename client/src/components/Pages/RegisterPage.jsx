import React from 'react'

export default function RegisterPage() {
  return (
    <form className='register'>
        <h1>Registration Form</h1>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button>Register</button>
    </form>
  )
}
