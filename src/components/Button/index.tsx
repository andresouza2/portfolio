import { ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  handleClick?: () => void
  children: ReactElement | string
  className?: string
  name: string
}

export const Button = ({ children, type = 'button', className, handleClick, name }: ButtonProps) => {
  return (
    <button
      type={type}
      name={name}
      className={twMerge('w-max rounded bg-green-600 px-6 py-3 duration-200 hover:bg-green-600/45', className)}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
