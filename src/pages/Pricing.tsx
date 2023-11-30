import PricingCard from '../components/PricingCard'

export default function Pricing() {
  return (
    <div className="pricing__section">
      <div className="pricing container d-f">
        <div className="pricing__heading d-f f-c">
          <h1>Simple Pricing</h1>
          <p>No hidden fees. No credit card required. Cancel anytime.</p>
        </div>
        <div className="pricing__cards">
          <PricingCard
            plan="Free Trial"
            price="0"
            featuresPresent={[
              'Hygiene and Quality inspection only',
              'Free listing on Q&I portal'
            ]}
            featuresNotPresent={[
              'staff training',
              'Q&I verified board at your permises',
              'Cost cutting plan',
              'One stop solution'
            ]}
            desc="Experience our free plan and get started with essential services
    at no cost."></PricingCard>
          <PricingCard
            plan="Standard Plan"
            price="2000"
            featuresPresent={[
              'Hygiene and Quality audit with solution',
              'Free listing on Q&I portal',
              'Staff Training',
              'Q&I verified board at your permises'
            ]}
            featuresNotPresent={['Cost cutting plan', 'One stop solution']}
            desc="Upgrade to our standard plan for enhanced features and support."></PricingCard>
          <PricingCard
            plan="Premium Plan"
            price="4000"
            featuresPresent={[
              'Hygiene and Quality audit with solution',
              'Free listing on Q&I portal',
              'Staff Training',
              'Q&I verified board at your permises',
              'Cost cutting plan',
              'One stop solution'
            ]}
            featuresNotPresent={[]}
            desc="Premium plan offers exclusive benefits and superior features for users."></PricingCard>
        </div>
        <div className="pricing__footer">
          <p>
            Raising standards, one inspection at a time. Elevate quality in
            hostels, healthcare, and more with our meticulous inspection
            services.
          </p>
        </div>
      </div>
    </div>
  )
}
