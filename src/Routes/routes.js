import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import CommingSoon from '../../src/Pages/Shared/ComingSoon'
import Details from '../Pages/Details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/comming-soon',
        element:  <CommingSoon/> ,
      },
      {
        path: '/service-details',
        element:  <Details/> ,
      },
    ],
  },
])

export default router
