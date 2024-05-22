/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from 'react-router-dom'
import { MainPage } from './pages/main/mainPage'
import { AuthPage } from './pages/auth/AuthPage'
import { EventPage } from './pages/event/eventPage'

function AppRoutes () {
  const routes = useRoutes([
    { path: '/', element: <MainPage /> },
    { path: '/auth', element: <AuthPage /> },
    { path: '/event', element: <EventPage/>}
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
