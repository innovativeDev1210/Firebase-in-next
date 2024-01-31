



import Logo from '@/components/NavBar/Logo'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='  top-0 fixed z-50 bg-foreground w-full '>
      <div className=' mt-2' >
        <Logo />
      </div>
      <div className=' flex bg-background flex-row justify-evenly mt-4 items-center'>
        <div>
          <Link href="/SignUp">
            Sign Up
          </Link>
        </div>

        <div>
          <Link href="/LogIn">
            Log In
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar