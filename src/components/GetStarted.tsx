import Button from "./Button"

const GetStarted = () => {
  return (
    <div className="get__started">
      <div className="get__started__content">
        <div className="top ta-c">
          <h2>Get Started</h2>
          <p>Let's get you started on your journey to excellence.</p>
          <Button className='mt-xl' size="xlarge" style="tertiary">
            Book a Demo
          </Button>
        </div>
        <div className="down">
          <p className="fs-xl">Start with free trial</p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted