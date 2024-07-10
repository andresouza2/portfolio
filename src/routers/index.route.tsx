import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import PublicRoute from './PublicRoute'
import { HomePage } from '../pages/HomePage'

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PublicRoute layout={DefaultLayout} />} id="root">
      <Route index element={<HomePage />} />
    </Route>,
  ),
)
