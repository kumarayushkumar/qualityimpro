import { Link } from 'react-router-dom'
import feature1 from '../assets/images/feature-1.jpg'

export const Image: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className="image__container">
      <img src={path} alt="" />
    </div>
  )
}

const FeatureContent = [
  {
    heading: 'Hygiene and Quality Audit with Solutions',
    description:
      'Assure top hygiene and quality through comprehensive, unannounced inspections and reports.'
  },
  {
    heading: 'Free Listing on Q&I Portal',
    description: 'Position your brand as a dining leader with quality exposure.'
  },
  {
    heading: 'Staff Training',
    description: 'Team excels in food services, customer engagement, and strategic upselling.'
  },
  {
    heading: 'One-Stop Solution',
    description: 'Simplify management with our seamless one-stop solution for quality and improvement.'
  },
  {
    heading: 'Cost-Cutting Plan',
    description: 'Maximize efficiency and savings with our tailored cost-cutting plan.'
  },
  {
    heading: 'Q&I Verified Board at Your Premises',
    description: 'Build trust with a Q&I verified board, showcasing your dedication.'
  }
]

const ListDesc: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>
        {description}
      </p>
    </li>
  )
}

const HomeFeatures: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <section className="home__feature my-xxl py-xl">
      <div className="container">
        <div className="section__header">
          <h3>Elevate with Excellence</h3>
          <p>A Look into Our Key Features</p>
        </div>
        <div className="home__feature__content">
          <div>
            <div className="content__header">
              <h3>Why Do you need Q&I?</h3>
              <p>
                Elevate Your Operations with Quality and Hygiene Inspections
                (Q&I)
              </p>
            </div>
            <div className="content__feature">
              <ul>
                {
                  FeatureContent.map((feature, index) => {
                    return (
                      <ListDesc
                        key={index}
                        title={feature.heading}
                        description={feature.description} />
                    )
                  })
                }
              </ul>
              <div className="content_image">
                <Image path={feature1} />
                <Image path={feature1} />
                <Image path={feature1} />
                <Image path={feature1} />
                <Image path={feature1} />
                <Image path={feature1} />
              </div>
            </div>
          </div>
          <div className='read__more'>
            <Link to='/feature'>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures
