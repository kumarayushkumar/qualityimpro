type SectionHeaderProps = {
  title: string
  description: string
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description
}) => {
  return (
    <div className="section__header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
