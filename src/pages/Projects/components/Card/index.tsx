// import CardImg from '../../../../assets/imgs/card-img.svg'
import { Button } from '../../../../components/Button'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  // img?: string
  title: string
  body: string
  handleClick: () => void
  className?: string
}

export const Card = ({ title, body, handleClick, className }: CardProps) => {
  return (
    <div
      className={twMerge('w-full overflow-hidden rounded-lg bg-gray-200 drop-shadow-md dark:bg-gray-900/45', className)}
    >
      {/* <img src={img ?? CardImg} alt="imagem de card" className="max-h-[149px] w-full rounded-t-lg object-cover" /> */}

      <div className="p-4">
        <p className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-300">{title}</p>
        <p className="mt-1 line-clamp-3 text-justify text-[12px] text-gray-800 dark:text-gray-300">{body}</p>
      </div>

      <div className="item-center flex justify-center px-4 pb-4">
        <Button name="saibaMais" className="w-75 h-8 py-1 text-sm" handleClick={handleClick}>
          Saiba mais
        </Button>
      </div>
    </div>
  )
}
