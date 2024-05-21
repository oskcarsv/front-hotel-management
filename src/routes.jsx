import { useRoutes } from 'react-router-dom/dist'
import { MainPage } from './pages/main/mainPage'
import { AuthPage } from './pages/auth/AuthPage'

const routes = useRoutes([
  { path: '/', element: <MainPage /> },
  { path: 'auth', element: <AuthPage /> }
])

export default routes
