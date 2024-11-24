import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { FaPizzaSlice } from "react-icons/fa";
const Header = () => {
    return (
        <header className='header'>
                <FaPizzaSlice  style={{fontSize:"24px"}}/>
            <h1 className='logo'>Fast Food</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/contact">Contact</Link>
                <FaShoppingCart  style={{fontSize:"20px"}}/>
            </nav>
        </header>
    )
}
export default Header
