import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import {
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-sec txt-white pt-xxl pb-xxl">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Quality & Improvisaion </h1>
          </div>
        </div>

        <div className="row mt-xxl fs-xl">
          <div className="col-12-sm col-4-md">
            <ul>
              <li>
                <Link to="/features" className="txt-white">
                  Feature
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="txt-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="txt-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="txt-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12-sm col-4-md">
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Status</li>
            </ul>
          </div>

          <div className="col-12-sm col-4-md">
            <div>
              <FontAwesomeIcon className="txt-pri" icon={faLocationDot} />
              <p className="px-m d-i">
                A-56, Rishi nagar, pitampura, Delhi 110034
              </p>
            </div>
            <div className="pt-m">
              <FontAwesomeIcon className="txt-pri" icon={faPhone} />
              <a className="px-m txt-white" href="tel:+918318783376">
                +91 83187 83376
              </a>
            </div>
            <div className="pt-xl">
              <a
                className="txt-pri fs-xxl px-s"
                href=""
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faInstagram} />
              </a>
              <a
                className="txt-pri fs-xxl px-s"
                href=""
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faFacebookF} />
              </a>
              <a
                className="txt-pri fs-xxl px-s"
                href=""
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faLinkedinIn} />
              </a>
              <a
                className="txt-pri fs-xxl px-s"
                href="https://api.whatsapp.com/send/?phone=918318783376&text&app_absent=0"
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>

        <div className="row ta-c jc-center txt-black mt-xxl pt-xl">
          <div className="col-12-sm">
            <hr className="line txt-tri" />
            <div className="mt-l">
              <a
                className="txt-white"
                href="https://www.growigh.com"
                target="_blank"
                rel="noopener noreferrrer">
                Developed and Maintained by{' '}
                <span className="fs-xl fw-5">
                  Gro<span className="growigh">w</span>igh
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
