import hygiene from '../assets/images/hygiene.jpg'
import listing from '../assets/images/listing.jpg'
import staff from '../assets/images/staff.jpg'
import premises from '../assets/images/premises.jpg'
import cost from '../assets/images/cost.jpg'
import solution from '../assets/images/solution.jpg'

const ListDesc = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <div className="list__desc">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}


type FeatureProps = {
  children?: React.ReactNode
}

const Feature = ({children}: FeatureProps) => {
  return (
    <section className="feature container d-f f-c">
      {children}
      <div className="feature__content">
        <ul className="feature__list d-f f-c">
          <li className="list__item--feature">
            <ListDesc
              title="Hygiene and Quality Audit with Solutions"
              description="Ensure impeccable standards with our thorough Hygiene and
                Quality audits, coupled with effective solutions for continuous
                improvement."
            />
            <div className="list__image">
              <img src={hygiene} alt="" />
            </div>
          </li>

          <li className="list__item--feature">
            <div className="list__image">
              <img src={listing} alt="" />
            </div>
            <ListDesc
              title="Free Listing on Q&I Portal"
              description="Boost visibility and credibility by showcasing your commitment to quality on our portal, free of charge."
            />
          </li>

          <li className="list__item--feature">
            <ListDesc
              title="Staff Training"
              description="Elevate performance through specialized training programs,
              equipping your team with the skills needed for excellence."
            />
            <div className="list__image">
              <img src={staff} alt="" />
            </div>
          </li>

          <li className="list__item--feature">
            <div className="list__image">
              <img src={premises} alt="" />
            </div>
            <ListDesc
              title="Q&I Verified Board at Your Premises"
              description="Build trust with a Q&I verified board proudly displayed at your
              location, a testament to your dedication to quality."
            />
          </li>

          <li className="list__item--feature">
            <ListDesc
              title="Cost-Cutting Plan"
              description="Maximize efficiency and savings with our customized cost-cutting
              plan, tailored to optimize your resources without compromising
              quality."
            />
            <div className="list__image">
              <img src={cost} alt="" />
            </div>
          </li>

          <li className="list__item--feature">
            <div className="list__image">
              <img src={solution} alt="" />
            </div>
            <ListDesc
              title="One-Stop Solution"
              description="Simplify management with our comprehensive one-stop solution,
              addressing all your quality and improvement needs seamlessly."
            />
          </li>
        </ul>
      </div>
    </section>
  )
}


export default Feature