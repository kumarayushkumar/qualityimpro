import Button from "./Button"

const GetStarted = () => {
  return (
    <div className="get__started">
      <div className="get__started__content">
        <div className="top">
          <h2>Get Started</h2>
          <p>Let's get you started on your journey to excellence.</p>
          <Button size="xlarge" style="secondary">
            Book a Demo
          </Button>
        </div>
        <div className="down">
          <p>Start with free trial</p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted