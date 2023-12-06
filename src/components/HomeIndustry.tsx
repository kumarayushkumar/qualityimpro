import { ListHomePage } from './ui/ListHomePage'
import { SectionHeader } from './ui/SectionHeader'
import hotel from '../assets/images/hotel.jpg'
import restaurant from '../assets/images/restaurant.jpg'

const IndustryData = () => {
  return (
    <div className="home__industry--content d-f f-c">
      <div className="list__container">
        <ListHomePage
          title="Where Quality, Hygiene, and Efficiency Meet"
          description="Maintaining top-notch hygiene and service is key for restaurant success. Balancing quality, hygiene, and cost ensures customer satisfaction and profitability"
          image={restaurant}
          className="industry__list--item"
          first
        />
      </div>
      <div className="list__container">
        <ListHomePage
          title="Redefining Hospitality in Budget Hotels"
          description="In budget hotels, cleanliness and courteous staff are crucial. Customers prioritize good service and cleanliness for a positive experience"
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
