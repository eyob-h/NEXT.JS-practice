import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dojo_logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
        <Image 
            src={dojo_logo}
            alt='Helpdesk Logo'
            width={70}
            quality={100}
            placeholder='blur'
        />
        <h1>Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
