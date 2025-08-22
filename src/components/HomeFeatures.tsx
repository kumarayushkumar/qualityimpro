import { Link } from 'react-router-dom'

import cost from '../assets/images/cost.webp'
import feature1 from '../assets/images/feature-1.webp'
import feature2 from '../assets/images/feature-2.webp'
import feature3 from '../assets/images/feature-3.webp'
import feature4 from '../assets/images/feature-4.webp'
import feature5 from '../assets/images/feature-5.webp'
import feature6 from '../assets/images/feature-6.webp'
import { Icon } from './ui/Icon'
import { Image } from './ui/Image'
import { SectionHeader } from './ui/SectionHeader'

const FeatureContent = [
  {
    heading: 'Precision Audits',
    description:
      'Audit backed insights assure unannounced inspections to get precise practice followed among the team'
  },
  {
    heading: 'Listing on Q&I Portal',
    description: 'Position your brand with industry leaders.'
  },
  {
    heading: 'Operational Excellence training',
    description:
      'Training platform with World class Exposure and emotional thinking.'
  },
  {
    heading: 'One-Stop Solution',
    description:
      'Simplify management with our seamless one-stop solution for quality and improvement.'
  },
  {
    heading: 'Cost-Cutting Plan',
    description:
      'Maximize efficiency and savings with our tailored cost-cutting plan.'
  },
   {
    heading: 'Milestones programme',
    description:
      'Q&I Specialised Programme which makes it easy to achieve Goal by taking small steps.'
  },
  {
    heading: 'Q&I Verified Board at Your Premises',
    description:
      'Build trust with a Q&I verified board, showcasing your dedication.'
  }
]

const ListDesc: React.FC<{ title: string; description: string }> = ({
  title,
  description
}) => {
  return (
    <li className="d-f gap-2 ai-center">
      <Icon type={true} />
      <div>
        <h3 style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </li>
  )
}

const HomeFeatures: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <section className="home__feature my-xxl py-xl section">
      <div className="container">
        <SectionHeader
          title="Elevate with Excellence"
          description="A Look into Our Key Features"
        />
        <div className="home__feature__content">
          <div>
            <div className="content__feature">
              <ul>
                {FeatureContent.map((feature, index) => {
                  return (
                    <ListDesc
                      key={index}
                      title={feature.heading}
                      description={feature.description}
                    />
                  )
                })}
              </ul>
              <div className="content_image d-f gap-2">
                <div className="d-f gap-2 f-c jc-center">
                  <Image path={feature1} />
                  <Image path={feature2} />
                  <Image path={feature3} />
                  <Image path={feature4} />
                </div>
                <div className="d-f gap-2 f-c jc-center">
                  <Image path={feature5} />
                  <Image path={feature6} />
                  <Image path={cost} />
                </div>
              </div>
            </div>
          </div>
          <div className="read__more">
            <Link
              to="/features"
              onClick={() => window.scrollTo(0, 0)}>
              Read More Feature
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures
