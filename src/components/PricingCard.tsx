import Button from './Button'

interface IPricingCard {
  plan: string
  price: string
  featuresPresent: string[],
  featuresNotPresent: string[],
  desc: string
}

export default function PricingCard({
  plan,
  price,
  featuresPresent,
  featuresNotPresent,
  desc
}: IPricingCard) {
  return (
    <div>
      <div className="pricing__card">
        <div className="pricing__card__header">
          <h1>{plan}</h1>
          <p>
            <span className="pricing__card__price">₹{price}</span> / month
          </p>
        </div>
        <div className="pricing__card__desc">
          <p>{desc}</p>
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
          <Button size="large">Get Started</Button>
        </div>
      </div>
    </div>
  )
}
