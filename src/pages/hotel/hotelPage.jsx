import { Navbar } from '../../components/navbars/Navbar'
import { Footer } from '../../components/footer/Footer'
import { HotelCard } from '../../components/hotel/hotelCard'
import { useLocation } from 'react-router-dom';
import { AddHotel } from '../../components/hotel/addHotel';

import './hotelPage.css'

export const HotelPage = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const addHotelClicked = queryParams.get('addHotelClicked');

  return (
    <div className='hotel-container'>
      <Navbar />
        {addHotelClicked?(
          <AddHotel/>
        ):(
          <HotelCard />
        )
        }

      <Footer />
    </div>
  )
}
