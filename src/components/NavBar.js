import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between w-3/4 my-5 mx-auto'>
        <div className='flex items-center gap-4'>
            <img className='w-32 h-9' src="/images/logo.png" alt='Logo' />
            <button className='bg-primary-color text-white py-2 px-4 rounded-md'>Courses</button>
        </div>
        <div className='flex items-center gap-4'>
            <a className='h-6' href='#'>Refer & Earn</a>
            <a className='h-6' href='#'>Resources</a>
            <a className='h-6' href='#'>About Us</a>
            <button className='py-2 px-4 rounded-md bg-[#94A3B833] '><a href='https://accredian.com/login'>Login</a></button>
            <button className='py-2 px-4 rounded-md bg-primary-color text-white'><a href='https://trial.accredian.com/'>Try for free</a></button>
        </div>
    </nav>
  )
}

export default NavBar