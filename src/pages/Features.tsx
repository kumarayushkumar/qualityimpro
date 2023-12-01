import Feature from '../components/Feature'
import GetStarted from '../components/GetStarted'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function Features() {
  return (
    <div>
      <div className="feature__hero"></div>
      <Feature>
        <SectionHeader
          title="Elevate with Excellence"
          description="A Look into Our Key Features"
        />
      </Feature>
      <GetStarted />
    </div>
  )
}
