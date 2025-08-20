import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import {
  faEnvelope,
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

        <div className="row mt-l pt-s fs-xl">
          <div className="col-12 col-6-md">
            <ul>
              <li>
                <Link
                  to="/features"
                  className="txt-white"
                  onClick={() => window.scrollTo(0, 0)}>
                  Feature
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="txt-white"
                  onClick={() => window.scrollTo(0, 0)}>
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/ourclients"
                  className="txt-white"
                  onClick={() => window.scrollTo(0, 0)}>
                  Our clients
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="txt-white"
                  onClick={() => window.scrollTo(0, 0)}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="col-12 mt-l mt-0-md col-4-md">
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Status</li>
            </ul>
          </div> */}

          <div className="col-12 mt-xl mt-0-md col-6-md">
            <div>
              <FontAwesomeIcon className="txt-pri" icon={faLocationDot} />
              <p className="px-m d-i">
               A1 Chattarpur Enclave, New Delhi, India        
              </p>
              
            </div>
             <div>
              <FontAwesomeIcon className="txt-pri" icon={faLocationDot} />
              <p className="px-m d-i">
                  Veliki Poganac 35, 48000, Koprivnica, Croatia             
                   </p>
              
            </div>
            <div className="pt-m">
              <FontAwesomeIcon className="txt-pri" icon={faPhone} />
              <a className="px-m txt-white" href="tel:+918318783376">
                +91 7906616181
              </a>
            </div>
            <div className="pt-m">
              <FontAwesomeIcon className="txt-pri" icon={faEnvelope} />
              <a
                aria-label="Send us an email on Info@qualityimpro.com"
                className="px-m txt-white"
                href="mailto:Info@qualityimpro.com">
                Info@qualityimpro.com
              </a>
            </div>
            <div className="social__button pt-l">
              <a
                aria-label="Visit our instagram page"
                className="txt-pri px-m"
                href="https://www.instagram.com/qualityandimprovisation/"
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faInstagram} />
              </a>
              <a
                aria-label="Visit our facebook page"
                className="txt-pri px-m"
                href="https://www.facebook.com/qualityandimprovisation"
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faFacebookF} />
              </a>
              <a
                aria-label="Visit our linkedin page"
                className="txt-pri px-m"
                href="https://www.linkedin.com/company/quality-and-imrovisation/about"
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faLinkedinIn} />
              </a>
              <a
                aria-label="Visit our whatsapp page"
                className="txt-pri px-m"
                href="https://api.whatsapp.com/send/?phone=918318783376&text&app_absent=0"
                target="_blank"
                rel="noopener noreferrrer">
                <FontAwesomeIcon className="" icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>

        <div className="row ta-c jc-center txt-black mt-m mt-l-md pt-xl">
          <div className="col-12-sm">
            <hr className="line txt-tri" />
            <div className="mt-l">
              <a
                aria-label="This website is developed and maintained by Growigh, visit Growigh website"
                className="txt-white fs-l"
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
