import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface LinkItemProps {
  name: string
  path: string
  className?: string
}
export const LinkItem = ({ name, path, className }: LinkItemProps) => {
  return (
    <Link to={path} className={twMerge('mx-4 text-gray-950 dark:text-gray-200', className)}>
      {name}
    </Link>
  )
}
