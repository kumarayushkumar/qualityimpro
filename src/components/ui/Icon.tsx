import presentIcon from '../../assets/svg/tablePresent.svg'
import notPresentIcon from '../../assets/svg/tableNotP.svg'

const style = {
  width: '25px',
  height: '25px',
  flexShrink: 0
}

export const Icon: React.FC<{ type: boolean }> = ({ type }) => {
  return (
    <div style={style}>
      {type ? (
        <img src={presentIcon} alt="" />
      ) : (
        <img src={notPresentIcon} alt="" />
      )}
    </div>
  )
}
