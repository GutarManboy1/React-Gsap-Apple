import React from 'react'
import { navItems } from '../constants'
const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple Logo" />
            <ul>
                {navItems.map((item) => (
                    <li key={item}>
                        <a href={item}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='flex-center gap-3'>
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar