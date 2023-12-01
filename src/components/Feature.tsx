import { ListHomePage } from './ui/ListHomePage'
// images
import cost from '../assets/images/cost.jpg'
import hygiene from '../assets/images/hygiene.jpg'
import listing from '../assets/images/listing.jpg'
import premises from '../assets/images/premises.jpg'
import solution from '../assets/images/solution.jpg'
import staff from '../assets/images/staff.jpg'

type FeatureProps = {
  children?: React.ReactNode
}

const Feature = ({ children }: FeatureProps) => {
  return (
    <section className="feature container d-f f-c">
      {children}
      <div className="feature__content">
        <ul className="feature__list d-f f-c">
          <ListHomePage
            title="Hygiene and Quality Audit with Solutions"
            description="Our dedicated inspector ensures top cleanliness and quality through comprehensive, periodic, and unannounced inspections covering personal grooming, premises hygiene, and food handling. Detailed reports will be promptly sent to the organization's owner or manager for thorough oversight."
            image={hygiene}
          />
          <ListHomePage
            title="Free Listing on Q&I Portal"
            description="Elevate your brand presence on our website with a dedicated section highlighting quality and hygiene—a crucial consideration for customers who savor dining experiences. This strategic exposure positions your brand as a frontrunner in meeting contemporary expectations, capturing the attention of those who prioritize cleanliness and excellence in their dining choices."
            image={listing}
            first
          />

          <ListHomePage
            title="Staff Training"
            description="Dedicated team members undergo extensive training led by industry experts, gaining valuable skills in food services, proper food handling, and effective customer engagement. Our program goes beyond standard practices, including specialized modules for upselling strategies, elevating service quality. This holistic approach aims to enhance both service and revenue through effective upselling, positively impacting overall business performance."
            image={staff}
          />

          <ListHomePage
            title="Q&I Verified Board at Your Premises"
            description="Build trust with a Q&I verified board proudly displayed at your
              location, a testament to your dedication to quality."
            image={premises}
            first
          />

          <ListHomePage
            title="Cost-Effective"
            description="Maximize efficiency and savings with our customized cost-cutting
              plan, tailored to optimize your resources without compromising
              quality."
            image={cost}
          />

          <ListHomePage
            title="One-Stop Solution"
            description="Simplify management with our comprehensive one-stop solution,
              addressing all your quality and improvement needs seamlessly."
            image={solution}
            first
          />
        </ul>
      </div>
    </section>
  )
}

export default Feature
