import { Link } from 'react-router-dom'
import Button from './atom/Button'

interface IPricingCard {
  plan: string
  featuresPresent: string[]
  featuresNotPresent: string[]
}

export default function PricingCard({
  plan,
  
  featuresPresent,
  featuresNotPresent,
}: IPricingCard) {
  return (
    <div className="pricing__card">
      <div className="pricing__card__header">
        <h1>{plan + (plan.split(' ')[0] === 'Free' ? ' (one month)' : '')}</h1>
      </div>
     

      <div className="pricing__card__content">
        <ul>
          {featuresPresent.map((feature, index) => (
            <li className="present" key={index}>
              {feature}
            </li>
          ))}
          {featuresNotPresent.map((feature, index) => (
            <li className="not__present" key={index}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="pricing__card__button">
        <Link to="/book-demo" onClick={() => window.scrollTo(0, 0)}>
          <Button size="large">Get Started</Button>
        </Link>
      </div>
    </div>
  )
}
