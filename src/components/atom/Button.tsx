import { FC } from 'react'

type ButtonStyle = 'primary' | 'secondary' | 'tertiary'
type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge'

export interface IButton {
  style?: ButtonStyle
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement> & IButton> = ({
  style = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}) => {
  const classes = `btn bdr-0 fw-b ${style} ${size} ${className || ''}`
  return (
    <button className={classes.trim()} {...props}>
      {children}
    </button>
  )
}

export default Button
