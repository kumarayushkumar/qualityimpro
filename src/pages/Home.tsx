import hero from '../assets/images/hero.jpg'
import Button from '../components/Button'

export default function Home() {
  return (
    <main>
      <section className="hero__section">
        <div className="hero__container container">
          <div className="hero__content">
            <h1 className="hero__title fs-xxxl">
              The <span>Quality</span> and <span>Improvisation</span> Platform
            </h1>
            <p className="hero__description fs-xl">
              QNI is a platform that helps you to improve the quality of your
              products and services.
            </p>
            <div className="hero__button">
              <Button size="xlarge" style='secondary'>Book a Demo</Button>
            </div>
          </div>
          <div className="hero__image">
            <img className='bdr-rd-m' src={hero} alt="" />
          </div>
        </div>
      </section>

      <section className="customer__section">
        <div className="customer__container container">
          <div className="customer__content">
            <h2 className="customer__title fs-xxxl">
              Trusted by <span>100+</span> customers
            </h2>
            <p className="customer__description fs-xl">
              We are trusted by more than 100 companies in Indonesia.
            </p>
          </div>
          <div className="customer__reviews">
            
          </div>
        </div>
      </section>
    </main>
  )
}
