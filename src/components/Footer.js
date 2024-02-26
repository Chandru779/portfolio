import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='py-2 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
            Build with <span className='text-primary text-2xl px-1 dark:text-primaryDark'>&#9825;</span><Link href="/">Love</Link>
            </div>
            <Link href="/">Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer