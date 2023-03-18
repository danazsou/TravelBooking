import React from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Navbar = () => {
  return (
    <section className="navBarSection">
        <header className="header flex">

            <div className="logoDiv">
                <a href="#" className="logo">
                <h1> <MdOutlineTravelExplore
                className="icon"/> Travel.</h1>
                </a>
            </div>

        </header>
    </section>
  )
}

export default Navbar