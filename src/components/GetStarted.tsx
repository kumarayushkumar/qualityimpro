import { Link } from 'react-router-dom'
import Button from './atom/Button'

const GetStarted = () => {
  return (
    <section className="get__started">
      <div className="get__started__content">
        <div className="top ta-c">
          <h2>Get Started</h2>
          <p>Let's get you started on your journey to excellence.</p>
          <Link to="/book-demo" onClick={() => window.scrollTo(0, 0)}>
            <Button className="mt-xl" size="xlarge" style="tertiary">
              Book a Demo
            </Button>
          </Link>
        </div>
        <div className="down">
          <p className="fs-xl">Start with free trial</p>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
