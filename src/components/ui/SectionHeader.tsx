type SectionHeaderProps = {
  title: string;
  description: string;
}
export const SectionHeader:React.FC<SectionHeaderProps> = ({
  title,
  description
}) => {
  return (
    <div className="section__header">
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
  )
}