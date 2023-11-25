import Button from './Button'

interface IPricingCard {
  plan: string
  price: string
  features: string[],
  desc: string
}

export default function PricingCard({ plan, price, features, desc }: IPricingCard) {
  return (
    <div>
      <div className="pricing__card">
        <div className="pricing__card__heading">
          <h1>{plan}</h1>
          <p>
            <span className="pricing__card__price">${price}</span> / month
          </p>
        </div>
        <div className="pricing__card__desc">
          <p>{desc}</p>
        </div>

        <div className="pricing__card__content">
          <ul>
            {
              features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))
            }
          </ul>
        </div>
        <div className="pricing__card__button">
          <Button size="large">Get Started</Button>
        </div>
      </div>
    </div>
  )
}
