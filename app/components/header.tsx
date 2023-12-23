import { NavLink } from '@remix-run/react'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0">
      <nav>
        <ul className="flex gap-6 justify-center p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-sky-400 font-semibold' : 'font-medium'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-sky-400 font-semibold' : 'font-medium'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-sky-400 font-semibold' : 'font-medium'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
