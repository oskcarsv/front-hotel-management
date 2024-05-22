import { useRoutes } from 'react-router-dom/dist'
import { MainPage } from './pages/main/mainPage'
import { AuthPage } from './pages/auth/AuthPage'
import { HotelPage } from './pages/hotel/hotelPage'

const routes = useRoutes([
  { path: '/', element: <MainPage /> },
  { path: 'auth', element: <AuthPage /> },
  { path: 'hotel', element: <HotelPage /> }
])

export default routes
