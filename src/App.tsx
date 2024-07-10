import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/index.route'

function App() {
  return <RouterProvider router={routers} />
}

export default App
