import React from 'react'
import './_Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="Header">
      <nav>
        <Link className="home" to="/">HOME</Link>
        <Link className="lab" to="/lab">LAB</Link>
        <Link className="news" to="/">NEWS</Link>
        <Link className="about" to="/">ABOUT</Link>
        <Link className="contact" to="/">CONTACT</Link>
      </nav>
    </div>
  )
}
