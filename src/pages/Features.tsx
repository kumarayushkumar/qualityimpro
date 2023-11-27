import Feature from '../components/Feature'
import GetStarted from '../components/GetStarted'

export default function Features() {
  return (
    <div>
      <div className="feature__hero"></div>
      <Feature>
        <div className="feature__header">
          <h2 className="home__heading">Elevate with Excellence</h2>
          <p>A Look into Our Key Features</p>
        </div>
      </Feature>
      <GetStarted />
    </div>
  )
}
