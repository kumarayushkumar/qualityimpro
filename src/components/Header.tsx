import { Link, NavLink } from 'react-router-dom'
import contact from '../assets/svg/contact.svg'
import logo from '../assets/svg/qnilogo.svg'
import search from '../assets/svg/search.svg'
import Button from './Button'

export default function Header() {
  return (
    // <div>
    <header className="header__container container">
      <Link to="/" className="logo__link">
        <img src={logo} alt="Qni logo" />
        <span className="company-name">
          Quality & <br /> Improvisation
        </span>
      </Link>
      <nav className="header__nav">
        <ul className="nav__links">
          <li className="link">
            <NavLink className="nav__link" to="features">
              Features
            </NavLink>
          </li>
          <li className="link">
            <NavLink className="nav__link" to="industries">
              Industries
            </NavLink>
          </li>
          <li className="link">
            <NavLink className="nav__link" to="pricing">
              Pricing
            </NavLink>
          </li>
          <li className="link">
            <NavLink className="nav__link" to="customers">
              Customers
            </NavLink>
          </li>
          <li className="link">
            <NavLink className="nav__link" to="about">
              About
            </NavLink>
          </li>
          <li className="link contact">
            <NavLink className="nav__link" to="contact">
              <div>
                <img src={contact} alt="" />
                <span>Contact</span>
              </div>
            </NavLink>
          </li>
          <li className="link search">
            <img src={search} alt="" />
          </li>
          <li className="link">
            <Button size="large">Book a Demo</Button>
          </li>
        </ul>
      </nav>
    </header>
    // </div>
  )
}
