import { Navbar } from '../../components/navbars/Navbar'
import { Footer } from '../../components/footer/Footer'
import { HotelCard } from '../../components/hotel/hotelCard'

import './hotelPage.css'

export const HotelPage = () => {
  return (
    <div className='hotel-container'>
      <Navbar />

      <HotelCard/>

      <Footer />
    </div>
  )
}
