import hero from '../assets/images/team.jpg'
import founder from '../assets/images/ceo.png'
export default function About() {
  return (
    <div>
      <section className="about">
        <div className="about__hero">
          <img className="hero__img" src={hero} alt="" />
        </div>
        <div className="about__content container">
          <div className="about__content--header">
            <h1 className="about__heading">About Us</h1>
            <p>
              At Q&I, our mission is to be your compass in the competitive
              landscape of the food and hospitality industry. We offer a
              comprehensive one-stop solution to alleviate your struggles,
              guiding your brand to swim alongside the industry giants. We
              understand the significant investment involved in the food and
              hospitality sector, and our expertise ensures that your time and
              money are wisely spent. Whether it's optimizing staff management,
              boosting revenues, or implementing effective cost-cutting
              strategies, we are here to provide the knowledge and guidance you
              need for success.
            </p>
            <p>
              Indulge your senses in a culinary journey as we meticulously
              showcase exceptional restaurants, where hygiene meets delectable
              flavors. Explore our curated selection that promises not just
              meals but memorable dining experiences.
            </p>
            <p>
              As a dedicated team of qualified and seasoned professionals in the
              hospitality sector, we are resolute in our commitment to foster
              exponential growth for others in the industry—ensuring success
              without the pains typically associated with business expansion.
            </p>
          </div>
          <div className="about__content--founder">
            <h1 className="about__heading">Founder & CEO</h1>
            <div className="founder">
              <div className="founder__img">
                <img className="img" src={founder} alt="" />
              </div>
              <div className="founder__information d-f f-c">
                <span className="name">Pawan Prajapati</span>
                <span className="position">
                  Founder & CEO of Quality and improvisation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
