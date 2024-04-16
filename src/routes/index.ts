import { RouteObject } from 'react-router-dom'
import Root from '../Root'

import Test from '../views/test'

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/abc',
        Component: Test,
      },
    ],
  },
]

export default routes
