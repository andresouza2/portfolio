import { ComponentType, ReactElement } from 'react'

type PublicRouteProps = {
  layout: ComponentType
}

const PublicRoute = ({ layout: Layout }: PublicRouteProps): ReactElement => {
  return <Layout />
}

export default PublicRoute
