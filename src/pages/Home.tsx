import hero from '../assets/images/hero (1).jpg'
import Button from '../components/Button'
import Feature from '../components/Feature'
import GetStarted from '../components/GetStarted'


export default function Home() {
  return (
    <main>
      <section className="hero__section">
        <div className="hero__container container">
          <div className="hero__content d-f f-c gap-2">
            <h1 className="hero__title fs-xxxl">
              The <span>Quality</span> and <span>Improvisation</span> Platform
            </h1>
            <p className="hero__description fs-xl fw-4">
              Q&I is a platform that helps you to improve the quality of your
              products and services.
            </p>
            <div className="hero__button d-f jc-space-between">
              <Button size="xlarge" style="secondary">
                Book a Demo
              </Button>
              <Button size="xlarge" style="primary">
                Get Started
              </Button>
            </div>
          </div>
          <div className="hero__image">
            <img className="bdr-rd-m" src={hero} alt="" />
          </div>
        </div>
      </section>
      <Feature>
        <div className="feature__header">
          <h2 className="home__heading">Elevate with Excellence</h2>
          <p>Our Distinctive Features</p>
        </div>
      </Feature>
      <GetStarted />
    </main>
  )
}
