import { FC, forwardRef } from 'react'

type InputSize = 'small' | 'medium' | 'large'

export interface IInput {
  size?: InputSize
  className?: string
}

const Input: FC<React.InputHTMLAttributes<HTMLInputElement> & IInput> =
  forwardRef(
    (
      { size = 'medium', className, ...props },
      ref: React.Ref<HTMLInputElement>
    ) => {
      const classes = `input fs-xl ${size} ${className || ''}`
      return <input ref={ref} className={classes.trim()} {...props} />
    }
  )

export default Input
