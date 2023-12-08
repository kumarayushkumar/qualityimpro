import { useState } from 'react'
import Button from '../components/atom/Button'
import Form from '../components/Form'
import ErrorMessage from '../components/ui/ErrorMessage'

export default function BookDemo() {
  const [error, setError] = useState('' as string)
  return (
    <section id="book-demo" className="demo__section">
      <div className="demo__hero"></div>
      <div className="container">
        <div className="demo__container my-xl row">
          <div className="demo__content d-f f-c jc-center ai-start col-12-sm col-7-lg gap-3">
            <div className="demo__header d-f f-c gap-2">
              <h1 className="demo__title fs-xxl">Book a Demo</h1>
              <p className="demo__description fs-xl">
                Fill out the form below and we will get in touch with you
              </p>
            </div>
            <Button className="mt-l" size="large">
              Book a demo
            </Button>
          </div>
          <div className="form__container mt-xl mt-0-lg col-12-sm bdr-rd-m col-5-lg mx-a d-f f-c">
            <Form setError={setError}/>
            {error && <ErrorMessage error={error} />}
          </div>
        </div>
      </div>
    </section>
  )
}
