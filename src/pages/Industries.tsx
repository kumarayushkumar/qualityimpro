import { useEffect } from 'react'

import hotel from '../assets/images/hotel.webp'
import restaurant from '../assets/images/restaurant.webp'
import GetStarted from '../components/GetStarted'
import { ListHomePage } from '../components/ui/ListHomePage'
import { SectionHeader } from '../components/ui/SectionHeader'

const IndustryData = () => {
  useEffect(() => {
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
    <div className="industry__list">
      <ListHomePage
        title="Empowering Your Restaurant Team"
        description="Absolutely, maintaining high standards of hygiene and service is crucial for a restaurant's success. Balancing quality, hygiene, and cost efficiency ensures customer satisfaction and profitability"
        image={restaurant}
        className="industry__list--item"
      />
      <ListHomePage
        title="Striking the Perfect Balance in Hotel"
        description="Indeed, in the hotel segment, courteous staff play pivotal roles. Customers often prioritize good service even in more affordable accommodations for a positive experience."
        image={hotel}
        className="industry__list--item"
        first
      />
    </div>
  )
}

export default function Industries() {
  useEffect(() => {
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
    <section id="industry" className="industry__section">
      <div className="industry__hero"></div>
      <div className="industry__content container">
        <SectionHeader
          title="Exemplary Hospitality Solutions"
          description="Refining Quality, Efficiency in Restaurants, Hotels"
        />
        <IndustryData />
      </div>
      <GetStarted />
    </section>
  )
}
