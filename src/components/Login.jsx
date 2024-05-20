import { useState } from "react";
import { Input } from "./Input";
import {
  validatePasswordMessage,
  validatePassword,
  validateUsernameOrEmail,
  validateUsernameOrEmailMessage
} from "../shared/validators";
import { useLogin } from "../shared/hooks";
import { useNavigate } from 'react-router-dom';
import myImage from '../assets/img/Imagen1.png';

import './styles/Login.css';

export const Login = ({ switchAuthHandler }) => {
  const {login, isLoading} = useLogin();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    usernameOrEmail: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
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

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "usernameOrEmail":
        isValid = validateUsernameOrEmail(value)
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormState((prevState) =>({
        ...prevState,
        [field]:{
            ...prevState[field],
            isValid,
            showError: !isValid
        }
    }))
  };

  const handleLogin = (event) => {
    event.preventDefault()
    login(formState.usernameOrEmail.value, formState.password.value)
  }

  const handleBack = () => {
    navigate('/');
  }

  const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.usernameOrEmail.isValid

  return (
    <div className="frame-1">
      <div className="contact-form">
        <div className="items">
          <div className="page">Page</div>
          <div className="page-1">Page</div>
          <div className="abut-us">About Us</div>
          <div className="button-2" onClick={handleBack}>
            <span className="regresar">Regresar</span>
          </div>
        </div>
        <div className="container">
          <div className="container-1">
            <div className="headline">
              <div className="login-1">Login</div>
              <span className="welcome-back">
                Welcome back<br />
              </span>
            </div>
            <form className="form" onSubmit={handleLogin}>
              <div className="input">
                <div className="user-or-email">User or Email</div>
                <div className="field">
                  <Input
                    field="usernameOrEmail"
                    value={formState.usernameOrEmail.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.usernameOrEmail.showError}
                    validationMessage={validateUsernameOrEmailMessage}
                  />
                </div>
              </div>
              <div className="input-1">
                <div className="password">Password</div>
                <div className="field-1">
                  <Input
                    field="password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                  />
                </div>
              </div>
              <div className="button">
                <button type="submit" disabled={isSubmitButtonDisabled}>
                  <span className="login">Login</span>
                </button>
              </div>
            </form>
            <div className="input-2">
              <div className="have-you-not-registered-do-it-here">
                Have you not registered? Do it here<br />
              </div>
              <div className="button-1" onClick={switchAuthHandler}>
                <span className="register">Register</span>
              </div>
            </div>
          </div>
          <div className="image-1">
            <img src={myImage} alt="My Image" />
          </div>
        </div>
        <div className="navigation-footer">
        </div>
      </div>
    </div>
  );
};
