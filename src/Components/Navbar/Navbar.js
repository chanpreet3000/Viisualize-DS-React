import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='main-nav'>
            <div className='main-nav__div1'>
                <div className='main-nav-header'>
                    <a href="#">Visualize DS</a>
                </div>
                <ul className='main-nav__div1-items'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Visualize</a>
                    </li>
                    <li>
                        <a href='#'>Learn</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                </ul>
            </div>
            <div className='main-nav__div2'>
                <ul className='main-nav__div2-items'>
                    <li>
                        <a href='#' className='sign-in-btn'>Sign in</a>
                    </li>
                    <li>
                        <a href='#' className='sign-up-btn'>Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
