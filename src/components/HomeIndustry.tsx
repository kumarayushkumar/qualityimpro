import hotel from '../assets/images/hotel.webp'
import restaurant from '../assets/images/restaurant.webp'
import { ListHomePage } from './ui/ListHomePage'
import { SectionHeader } from './ui/SectionHeader'

const IndustryData = () => {
  return (
    <div className="home__industry--content d-f f-c">
      <div className="list__container">
        <ListHomePage
          title="Where Quality and Efficiency Meet"
          description="Maintaining top Notch standards and world class service is key for Success. Balancing quality and cost ensures customer satisfaction and profitability."
          image={restaurant}
          className="industry__list--item"
          first
        />
      </div>
      <div className="list__container">
        <ListHomePage
          title="Redefining Hospitality "
          description="Introduce Luxury into hospitality, with Q&I. Customer prioritize Exceptional service and positive experience, which lingers even after the checkout. "
          image={hotel}
          className="industry__list--item"
        />
      </div>
    </div>
  )
}

export const HomeIndustry = () => {
  return (
    <section className="home__industry section">
      <div className="home__industry--container container">
        <SectionHeader
          title="Quality Quotient"
          description="Elevating Standards in Hotels and Restaurants"
        />
        <IndustryData />
      </div>
    </section>
  )
}
