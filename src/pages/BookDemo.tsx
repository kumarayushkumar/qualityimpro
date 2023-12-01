import Button from '../components/Button'
import Form from '../components/Form'

export default function BookDemo() {
  return (
    <section className="demo__section">
      <div className="demo__hero"></div>
      <div className="container">
        <div className="demo__container row">
          <div className="demo__content col-12-sm col-6-md">
            <div className="demo__header">
              <h1 className="demo__title">Book a Demo</h1>
              <p className="demo__description">
                Fill out the form below and we will get in touch with you
              </p>
            </div>
            <Button size="large">Book a demo</Button>
          </div>
          <div className="col-12-sm col-6-md">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
