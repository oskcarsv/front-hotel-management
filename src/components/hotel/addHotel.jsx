import { useState } from 'react';

import { Input } from '../Input';

import { useAddHotel } from '../../shared/hooks';

export const AddHotel = () =>{

    const {addHotel, isLoading} = useAddHotel();

    const [formState, setFormState] = useState({

        hotelName: {

            value: "",
            isValid: false,
            showError: false

        },

        hotelImage: {
            value: "",
            isValid: false,
            showError: false,
        },

        hotelDirection: {
            value: "",
            isValid: false,
            showError: false,
        },

        hotelNumber: {
            value: "",
            isValid: false,
            showError: false,
        },

        bedroomName: {
            value: "",
            isValid: false,
            showError: false,
        },

        bedroomCuantity: {
            value: "",
            isValid: false,
            showError: false,
        },

    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
          ...prevState,
          [field]: {
            ...prevState[field],
            value,
          },
        }));
      };

    const handleAddHotel = (event) => {
        event.preventDefault();
        addHotel(formState.hotelName.value, 
            formState.hotelImage.value,
            formState.hotelDirection.value,
            formState.hotelNumber.value,
            formState.bedroomName.value,
            formState.bedroomCuantity.value,);
    };

    const isSubmitButtonDisabled = isLoading 

  return (
      <div className='full-page'>
        <div className="comment-container">
          <form className="comment-form" onSubmit={handleAddHotel}>
          <Input
              field="hotelName"
              label="Hotel Name"
              value={formState.hotelName.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={() => {}}
              type="text"
            />
            <Input
              field="hotelImage"
              label="HotelImage (URL)"
              value={formState.hotelImage.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={() => {}}
              type="text"
            />
            <Input
              field="hotelDirection"
              label="Hotel Direction"
              value={formState.hotelDirection.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={() => {}}
              type="text"
            />
            <Input
              field="hotelNumber"
              label="Hotel Number"
              value={formState.hotelNumber.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={() => {}}
              type="text"
            />
            <Input
              field="bedroomName"
              label="Bedroom Name"
              value={formState.bedroomName.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={() => {}}
              type="text"
            />
            <Input
              field="bedroomCuantity"
              label="Bedroom Cuantity"
              value={formState.bedroomCuantity.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={() => {}}
              type="text"
            />
            <button className='add-comment' disabled={isSubmitButtonDisabled}>
              Add Hotel
            </button>
          </form>
        </div>
      </div>
      );
};