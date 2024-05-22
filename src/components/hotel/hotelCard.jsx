import { listHotels as listHotelsRequest } from '../../services'

import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import '../styles/Variables.css'
import '../styles/Cards.css'

import toast from 'react-hot-toast'

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
    <div>
      {isLoading
        ? (
          <p>Loading.... Wait a minute</p>
          )
        : (
          <div>
            {Array.isArray(hotel) && hotel.length > 0
              ? (
                  hotel.map((hotel) => (
                    <div key={hotel._id}>
                      <div>
                        <h3>{hotel.hotelName}</h3>

                        <div>
                          <img src={hotel.hotelImage} />
                        </div>

                        <h3>{hotel.hotelDirection}</h3>

                        <h3>{hotel.hotelNumber}</h3>

                        <h3>{hotel.status}</h3>
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
