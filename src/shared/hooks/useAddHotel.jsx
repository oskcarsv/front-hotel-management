import { useNavigate } from 'react-router-dom';

import { addHotel as addHotelRequest } from '../../services';

import toast from 'react-hot-toast';

export const useAddHotel = () => {

    const navigate = useNavigate();

    const addHotel = async (hotelName, hotelImage, hotelDirection, hotelNumber, bedroomName, bedroomCuantity) => {

        const response = await addHotelRequest({

            hotelName, 
            hotelImage, 
            hotelDirection, 
            hotelNumber, 
            bedroomName, 
            bedroomCuantity

        });

        if (response.error) {
            
            console.log(response.error)
            console.log(response.e)
            console.log(response.e?.response?. data);
            
            return toast.error(response.e?.response?.data || 'An error ocurred when you try to add a Hotel, please try again');

        }

        navigate('/hotel')

    }

    return {
        addHotel
    }

}