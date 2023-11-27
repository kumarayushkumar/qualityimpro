import { Link, NavLink } from 'react-router-dom'

import cross from '../assets/svg/menux.svg'
import menu from '../assets/svg/menu.svg'
import logo from '../assets/svg/qnilogo.svg'
import Button from './Button'

export default function Header() {

  const handleClick = () => {
    const headerContainer = document.querySelector('.header__container')
    headerContainer?.classList.toggle('nav-open')
  }
  return (
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
              About Us
            </NavLink>
          </li>
          <li className="link contact">
            <NavLink className="nav__link" to="contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <li className="link">
        <Button size="large">Book a Demo</Button>
      </li>
      <div className="btn-mobile-nav" onClick={handleClick}>
        <img className="icon-mobile-nav open" src={menu} alt="" />
        <img
          className="icon-mobile-nav close"
          src={cross}
          alt=""
        />
      </div>
    </header>
  )
}
