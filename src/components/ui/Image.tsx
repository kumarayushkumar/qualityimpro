export const Image: React.FC<{ path: string, className?: string|'' }> = ({ path,
className }) => {
  return (
    <div className={"image__container "+className}>
      <img src={path} alt="" />
    </div>
  )
}