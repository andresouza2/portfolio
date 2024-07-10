import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export const DefaultLayout = () => {
  return (
    <div className="min-h-screen min-w-[300px] bg-gray-200 dark:bg-gray-950">
      <div className="text-primary container mx-auto min-h-screen min-w-[300px]">
        <Header />
        <div className="flex flex-col items-center 2xl:px-[11rem]">
          <div className="flex flex-col justify-between align-top">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
