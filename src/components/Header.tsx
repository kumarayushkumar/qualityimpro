import { Link, NavLink } from 'react-router-dom'

import { useEffect } from 'react'
import menu from '../assets/svg/menu.svg'
import cross from '../assets/svg/menux.svg'
import logo from '../assets/svg/qnilogo.svg'
import Button from './Button'

export default function Header() {
  useEffect(() => {
    const headerContainer = document.querySelector('.header__container')
    const navLinks = document.querySelectorAll('.link')
    const navBtn = document.querySelector('.btn-mobile-nav')
    console.log(navBtn, headerContainer)
    navBtn?.addEventListener('click', () => {
      headerContainer?.classList.toggle('nav-open')
    })
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        headerContainer?.classList.remove('nav-open')
      })
    })
  }, [])
  // const handleClick = () => {
  //   const headerContainer = document.querySelector('.header__container')
  //   headerContainer?.classList.toggle('nav-open')

  //   const navLinks = document.querySelectorAll('.link');
  //   console.log(navLinks)
  //   navLinks.forEach(link => {
  //     link.addEventListener('click', () => {
  //       headerContainer?.classList.remove('nav-open')
  //     })
  //   })
  // }
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="logo__link">
          <img src={logo} alt="Qni logo" />
          <span className="company-name">
            Quality & <br /> Improvisation
          </span>
        </Link>
        <nav className="header__nav">
          <ul className="nav__links">
            <li className="link">
              <NavLink
                className="nav__link"
                to="features"
                onClick={() => window.scrollTo(0, 0)}>
                Features
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                className="nav__link"
                to="industries"
                onClick={() => window.scrollTo(0, 0)}>
                Industries
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                className="nav__link"
                to="pricing"
                onClick={() => window.scrollTo(0, 0)}>
                Pricing
              </NavLink>
            </li>
            {/* <li className="link">
              <NavLink className="nav__link" to="customers">
                Customers
              </NavLink>
            </li> */}
            <li className="link">
              <NavLink
                className="nav__link"
                to="about"
                onClick={() => window.scrollTo(0, 0)}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <li className="link nav__btn">
          <Link to="book-demo" onClick={() => window.scrollTo(0, 0)}>
            <Button size="large">Book a demo</Button>
          </Link>
        </li>
        <div className="btn-mobile-nav">
          <img className="icon-mobile-nav open" src={menu} alt="" />
          <img className="icon-mobile-nav close" src={cross} alt="" />
        </div>
      </div>
    </header>
  )
}
