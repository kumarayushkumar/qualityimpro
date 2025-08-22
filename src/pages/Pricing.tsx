import GetStarted from '../components/GetStarted'
import PricingCard from '../components/PricingCard'

export default function Pricing() {
  return (
    <section id="pricing" className="pricing__section">
      <div className="pricing container d-f">
        <div className="pricing__heading d-f f-c">
          <h1>Who do we cater?</h1>
        </div>
        <div className="pricing__cards">
          <PricingCard
            plan="Hotel"
            featuresPresent={[
              'At Q&I, we help hotels elevate their guest experience through detailed audits, mystery guest visits, and tailored staff training. Our insights highlight strengths and uncover gaps, ensuring consistent service, improved guest satisfaction, and stronger online reputation—all while supporting your team to deliver excellence every day',
            ]}
            featuresNotPresent={[
              
            ]}
            ></PricingCard>
          <PricingCard
            plan="Restaurant"
            featuresPresent={[
              'In luxury dining, every detail matters. At Q&I, we help fine-dining restaurants uphold the highest standards of service, and guest engagement. Through discreet audits, refined service evaluations, and bespoke staff training, we ensure your restaurant delivers flawless experiences that reflect elegance, precision, and world-class hospitality.',
            ]}
            featuresNotPresent={[]}
            ></PricingCard>
          <PricingCard
            plan="Cafe"
            featuresPresent={[
              'Cafés thrive on atmosphere, consistency, and connection. At Q&I, we help cafés refine hygiene practices, service flow, and team training to ensure every guest enjoys not just great coffee, but a welcoming experience they want to return to. Our audits highlight the small details that create big impressions—turning casual visits into loyal relationships.',
            ]}
            featuresNotPresent={[]}
            ></PricingCard>
        </div>
        <div className="pricing__footer">
          <p className="fs-xl">
            
          </p>
        </div>
      </div>
      <GetStarted />
    </section>
  )
}
