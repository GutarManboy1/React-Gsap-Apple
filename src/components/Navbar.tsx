import { navLinks } from '../constants'
const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple Logo" />
            <ul>
                {navLinks.map((link) => (
                    <li key={link}>
                        <a href={link}></a>
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