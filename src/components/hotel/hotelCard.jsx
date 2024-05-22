import { listHotels as listHotelsRequest } from '../../services'

import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import '../styles/Variables.css'
import '../styles/Cards.css'

import toast from 'react-hot-toast'
import addressIcon from '../../assets/img/address.png'

export const HotelCard = () => {
  const [hotel, setHotel] = useState([])

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const listHotel = async () => {
    setIsLoading(true)

    try {
      const response = await listHotelsRequest()
      console.log(response.data)
      setHotel(response.data.hotel)
    } catch (error) {
      return toast.error(hotel.e?.response?.data || "Can't List the Hotels")
    } finally {
      setIsLoading(false)
    }

    console.log(hotel)
  }

  useEffect(() => {
    listHotel()
  }, [])

  return (
    <div className='cards-container'>
      {isLoading
        ? (
          <p>Loading.... Wait a minute</p>
          )
        : (
          <div className='hotel-cards'>
            {Array.isArray(hotel) && hotel.length > 0
              ? (
                  hotel.map((hotel) => (
                    <div className='hotel-item' key={hotel._id}>
                      <div className='item-content'>
                        <div>
                          <img className='item-content-img' src={hotel.hotelImage} />
                        </div>
                        <h3 className='hotel-name'>{hotel.hotelName}</h3>

                        <div className='address-content'>
                          <img className='address-icon' src={addressIcon} />
                          <h3 className='hotel-address'>{hotel.hotelDirection}</h3>
                        </div>
                      </div>
                    </div>
                  ))
                )
              : (
                <h5>DATA NOT FOUND, SORRY :l</h5>
                )}
          </div>
          )}
    </div>
  )
}
