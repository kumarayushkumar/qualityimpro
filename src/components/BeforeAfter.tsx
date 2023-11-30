import { Icon } from './ui/Icon'

interface BeforeAfterCardProps {
  points: string[]
  type: boolean
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({
  points,
  type
}) => {
  return (
    <div
      className={
        'before__after__card d-f f-c bg-white bdr-rd-m p-l ' +
        (type ? 'after' : 'before')
      }>
      <div className="before__after__card__content ">
        <div className='content__header'>
          <p>{(type ? 'After' : 'Before') +' Q&I' }</p>
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
    <section className="before__after__section my-xxl py-xl">
      <div className="container">
        <div className="section__header">
          <h3>Raising the Bar</h3>
          <p>Our Hospitality Enhancement Solutions</p>
        </div>
        <div className="d-f jc-space-evenly">
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
      </div>
    </section>
  )
}
