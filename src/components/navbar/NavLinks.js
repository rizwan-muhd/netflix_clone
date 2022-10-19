import React from 'react'
import './NavLinks.css'

function NavLinks() {
    return (
        <div className="navlink">
            <li>
                <ul className='links'>Home</ul>
                <ul className='links'>Tv Shows</ul>
                <ul className='links'>Originals</ul>
                <ul className='links'>Movies</ul>
                <ul className='links'>Recently Added</ul>
                <ul className='links'>My List</ul>
            </li>
        </div>
    )
}

export default NavLinks