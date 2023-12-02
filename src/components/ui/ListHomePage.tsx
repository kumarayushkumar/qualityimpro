import { Image } from './Image'
import { ListDesc } from './ListDesc'

export const ListHomePage = ({
  title,
  description,
  image,
  className,
  first
}: {
  title: string
  description: string
  image: string
  className?: string | ''
  first?: boolean
}) => {
  return (
    <li className={'list__item--default ' + (className ? className : '')}>
      {first ? <Image className="list__image" path={image} /> : null}
      <ListDesc title={title} description={description} />
      {!first ? <Image className="list__image" path={image} /> : null}
    </li>
  )
}
