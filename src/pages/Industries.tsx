import GetStarted from '../components/GetStarted'
import { ListHomePage } from '../components/ui/ListHomePage'
import { SectionHeader } from '../components/ui/SectionHeader'
import restaurant from '../assets/images/restaurant.jpg'
import hotel from '../assets/images/hotel.jpg'

const IndustryData = () => {
  return (
    <div className="industry__list">
      <ListHomePage
        title="Where Quality, Hygiene, and Efficiency Meet"
        description="Maintaining top-notch hygiene and service is key for restaurant success. Balancing quality, hygiene, and cost ensures customer satisfaction and profitability"
        image={restaurant}
        className="industry__list--item"
      />
      <ListHomePage
        title="Where Quality, Hygiene, and Efficiency Meet"
        description="Maintaining top-notch hygiene and service is key for restaurant success. Balancing quality, hygiene, and cost ensures customer satisfaction and profitability"
        image={hotel}
        className="industry__list--item"
        first
      />
    </div>
  )
}

export default function Industries() {
  return (
    <div className='industry__section'>
      <div className="industry__hero"></div>
      <div className="industry__content container">
        <SectionHeader
          title="Elevate with Excellence"
          description="A Look into Our Key Features"
        />
        <IndustryData />
      </div>
      <GetStarted />
    </div>
  )
}
