import React from 'react'
import { LoginForm } from '../components'

const LoginPage = () => {
  return (
    <>
        <section className='flex items-center justify-center w-screen h-screen p-4 bg-fuchsia-600'>
            <LoginForm/>
        </section>
    </>
  )
}

export default LoginPage