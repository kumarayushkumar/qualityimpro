import { Link } from 'react-router-dom'
import hero from '../assets/images/hero.jpg'
import BeforeAfter from '../components/BeforeAfter'
import Button from '../components/atom/Button'
import GetStarted from '../components/GetStarted'
import HomeFeatures from '../components/HomeFeatures'
import { HomeIndustry } from '../components/HomeIndustry'

export default function Home() {
  return (
    <main>
      <section className="hero__section">
        <div className="hero__container">
          <div className="hero__content d-f f-c gap-2">
            <h1 className="hero__title fs-xxl">
              The <span className="fs-xxxl">Quality</span> and{' '}
              <span className="fs-xxxl">Improvisation</span> Platform
            </h1>
            <p className="hero__description fs-xl fw-4">
              Q&I is a platform that helps you to improve the quality of your
              products and services.
            </p>
            <div className="hero__button d-f jc-space-between">
              <Button className="hover" size="xlarge" style="secondary">
                <Link to="book-demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
          <div className="hero__image">
            <img className="bdr-rd-m" src={hero} alt="" />
          </div>
        </div>
      </section>
      <HomeFeatures />
      <HomeIndustry />
      <BeforeAfter />
      <GetStarted />
    </main>
  )
}
