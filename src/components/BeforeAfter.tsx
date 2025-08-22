import { Icon } from './ui/Icon'
import { SectionHeader } from './ui/SectionHeader'

interface IBeforeAfterCard {
  points: string[]
  type: boolean
}

const BeforeAfterCard: React.FC<IBeforeAfterCard> = ({ points, type }) => {
  return (
    <div
      className={
        'before__after__card d-f f-c bg-white bdr-rd-m p-l ' +
        (type ? 'after' : 'before')
      }>
      <div className="before__after__card__content ">
        <div className="content__header">
          <p>{(type ? 'After' : 'Before') + ' Q&I'}</p>
        </div>
        <ul className="card__points">
          {points.map((point: string, index: number) => (
            <li className="d-f ai-center gap-1 p-m" key={index}>
              <span>{<Icon type={type}></Icon>}</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="before__after__section section">
      {/* <div className="container">
        <SectionHeader
          title="Raising the Bar"
          description="Our Hospitality Enhancement Solutions"
        />
        <div className="before__after__card__container d-f jc-space-evenly">
          <BeforeAfterCard
            points={[
              'Subpar Customer Experience',
              'Unsanitary Environment',
              'Escalated Food and Overhead Costs',
              'Minimal Revenue',
              'Opaque Operational Reports'
            ]}
            type={false}
          />
          <BeforeAfterCard
            points={[
              'Enhanced Customer Experience',
              'Hygienic Environment',
              'Reduced Food and Overhead Costs',
              'Maximum Revenue',
              'Transparent Operational Reports',
              'One point solution for all struggle'
            ]}
            type={true}
          />
        </div>
      </div> */}
    </section>
  )
}
