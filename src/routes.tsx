import { createBrowserRouter } from 'react-router-dom'

import WrapperIndex from './pages/app'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WrapperIndex />,
  },
])
