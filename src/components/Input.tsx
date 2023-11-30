import { FC } from 'react'

type InputSize = 'small' | 'medium' | 'large'

export interface IInput {
  size?: InputSize
  className?: string
}

const Input: FC<React.InputHTMLAttributes<HTMLInputElement> & IInput> = ({
  size = 'medium',
  className,
  ...props
}) => {
  const classes = `input fs-l ${size} ${className || ''}`
  return <input className={classes.trim()} {...props} />
}

export default Input
