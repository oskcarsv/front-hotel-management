import { Navbar } from '../../components/navbars/Navbar'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { Content } from '../../components/dashboard/Content'
import { Footer } from '../../components/footer/Footer'

import './mainPage.css'

export const MainPage = () => {
  const isFetching = false

  if (isFetching) {
    return <LoadingSpinner />
  }

  return (
    <div className='main-container'>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}
