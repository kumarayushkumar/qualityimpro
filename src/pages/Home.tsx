import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/images/hero.webp'
import BeforeAfter from '../components/BeforeAfter'
import GetStarted from '../components/GetStarted'
import HomeFeatures from '../components/HomeFeatures'
import { HomeIndustry } from '../components/HomeIndustry'
import Button from '../components/atom/Button'

export default function Home() {
  useEffect(() => {
    // for section
    const allSections = document.querySelectorAll('.section')

    const revealSection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      const [entry] = entries

      if (!entry.isIntersecting) return

      entry.target.classList.remove('section--hidden')
      observer.unobserve(entry.target)
    }

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15
    })
    // for list
    allSections.forEach(function (section) {
      sectionObserver.observe(section)
      section.classList.add('section--hidden')
    })

    const allLists = document.querySelectorAll('.list__item--default')

    const revealSectionList = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      const [entry] = entries

      if (!entry.isIntersecting) return

      entry.target.classList.remove('list__item--hidden')
      observer.unobserve(entry.target)
    }

    const sectionObserverList = new IntersectionObserver(revealSectionList, {
      root: null,
      threshold: 0.15
    })

    allLists.forEach(function (section) {
      sectionObserverList.observe(section)
      section.classList.add('list__item--hidden')
    })
  }, [])
  return (
    <main>
      <section className="hero__section section">
        <div className="hero__container">
          <div className="hero__content d-f f-c gap-2">
            <h1 className="hero__title fs-xxl">
              The <span className="fs-xxxl">Quality</span> and{' '}
              <span className="fs-xxxl">Improvisation</span> Platform
            </h1>
            <p className="hero__description fs-xl fw-4">
              Elevate your food and hospitality business with our comprehensive
              solutions, enhancing quality, improving customer experience, and
              maximizing revenue
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
