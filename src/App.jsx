/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from 'react-router-dom'
import { MainPage } from './pages/main/mainPage'
import { AuthPage } from './pages/auth/AuthPage'
import { HotelPage } from './pages/hotel/hotelPage'

function AppRoutes () {
  const routes = useRoutes([
    { path: '/', element: <MainPage /> },
    { path: '/auth', element: <AuthPage /> },
    { path: 'hotel', element: <HotelPage /> }
  ])
  return routes
}
function App () {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
