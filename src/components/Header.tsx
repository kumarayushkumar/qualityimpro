import search from '../assets/svg/search.svg'
import logo from '../assets/svg/qnilogo.svg'
import contact from '../assets/svg/contact.svg'
export default function Header() {
  return (
    // <div>
    <header className="header__container container">
      <div className="logo">
        <img src={logo} alt="Qni logo" />
        <span className="companyName">Quality & improvisation</span>
      </div>
      <nav className="header__nav">
        <ul className="nav__links">
          <li className="nav__link">Features</li>
          <li className="nav__link">Industries</li>
          <li className="nav__link">Pricing</li>
          <li className="nav__link">Customers</li>
          <li className="nav__link">About</li>

          <li className="nav__link contact">
            <div>
              <img src={contact} alt="" />
              <span>Contact</span>
            </div>
          </li>
          <li className="nav__link search">
            <img src={search} alt="" />
          </li>
          <li className="nav__link">
            <button className="btn nav__button">Book a demo</button>
          </li>
        </ul>
      </nav>
    </header>
    // </div>
  )
}
