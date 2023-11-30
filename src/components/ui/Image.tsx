export const Image: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className="image__container">
      <img src={path} alt="" />
    </div>
  )
}