import PricingCard from '../components/PricingCard'

export default function Pricing() {
  return (
    <div className='pricing__section'>
      <div className="pricing container d-f">
        <div className="pricing__heading d-f f-c">
          <h1>Simple Pricing</h1>
          <p>
            No hidden fees. No credit card required. Cancel anytime.
          </p>
        </div>
        <div>
          <PricingCard
            plan="Free Trial"
            price="0"
            features={[
              'Free hygiene inspection',
              'Free staff training',
              'Free listing on Q&I portal'
            ]}
            desc="Experience our free plan and get started with essential services
    at no cost."></PricingCard>
        </div>
      </div>
    </div>
  )
}
