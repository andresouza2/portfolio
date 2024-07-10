import { twMerge } from 'tailwind-merge'

interface Props {
  SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>
  className?: string
  [key: string]: any
}

const Icon = ({ SvgComponent, className, ...props }: Props) => {
  return <SvgComponent className={twMerge(`h-6 w-6`, className)} {...props} />
}

export default Icon
