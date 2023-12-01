export const ListDesc = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <div className="list__desc">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}