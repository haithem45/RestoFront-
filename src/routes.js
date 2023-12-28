import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

export default function Routes() {
    const router = useRoutes ([
        {
            path: "/",
            element: <Home />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path:'*',
            element:<NotFound />
          }
    ])
  return router
}