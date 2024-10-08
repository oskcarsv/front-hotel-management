/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input } from "./Input";
import {
  emailValidationMessage,
  validatePasswordMessage,
  passwordConfirmationMessage,
  validateUsernameMessage,
  validateName,
  validateUsername,
  validateConfirPassword,
  validateEmail,
  validatePassword,
  validateNameMessage,
} from "../shared/validators";
import { useRegister } from "../shared/hooks/useRegister";
import "./Register.css";


export const Register = ({ switchAuthHandler, onRegister }) => {
  const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    name: {
      value: "",
      isValid: false,
      showError: false,
    },
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConfirm: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
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
      case "name":
        isValid = validateName(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "passwordConfirm":
        isValid = validateConfirPassword(formState.password.value, value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    register(
      formState.name.value,
      formState.email.value,
      formState.password.value,
      formState.username.value
    );
    onRegister();
  };

  const isSubmitButtonDisabled =
    isLoading ||
    !formState.password.isValid ||
    !formState.email.isValid ||
    !formState.passwordConfirm.isValid ||
    !formState.username.isValid;

  return (
    <div className="frame-1">
      <div className="contact-form">
        <div className="container">
          <div className="container-1">
            <div className="headline">
              <div className="login-1">Register</div>
              <span className="welcome-back">
                Welcome to YouHotel
                <br />
              </span>
            </div>
            <form className="auth-form" onSubmit={handleRegister}>
              <div className="input">
                <div className="user-or-email">Name</div>
                <div className="field">
                  <Input
                    field="name"
                    value={formState.name.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.name.showError}
                    validationMessage={validateNameMessage}
                  />
                </div>
              </div>

              <div className="input-1">
                <div className="user-or-email">Email</div>
                <div className="field">
                  <Input
                    field="email"
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                  />
                </div>
              </div>

              <div className="input-1">
                <div className="user-or-email">Username</div>
                <div className="field">
                  <Input
                    field="username"
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={validateUsernameMessage}
                  />
                </div>
              </div>

              <div className="input-1">
                <div className="user-or-email">Password</div>
                <div className="field">
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

              <div className="input-1">
                <div className="user-or-email">Password</div>
                <div className="field">
                  <Input
                    field="passwordConfirm"
                    value={formState.passwordConfirm.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConfirm.showError}
                    validationMessage={passwordConfirmationMessage}
                  />
                </div>
              </div>

              <button
                className="button-1"
                type="submit"
                disabled={isSubmitButtonDisabled}
              >
                Register
              </button>
            </form>
            <span
              onClick={switchAuthHandler}
              className="auth-form-switch-label"
            >
              ¿Do you already have an account? Sign in here!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
