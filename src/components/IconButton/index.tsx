import { twMerge } from 'tailwind-merge'
import Icon from '../Icon'

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  className?: string
  [key: string]: any
  handleClick?: () => void
}

const IconButton = ({ icon, className, handleClick, ...props }: Props) => {
  return (
    <button onClick={() => handleClick?.()} className={twMerge('', className)} {...props}>
      <Icon SvgComponent={icon} />
    </button>
  )
}

export default IconButton
