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
        <div className="login-1">Register</div>
        <form className="auth-form" onSubmit={handleRegister}>
          <Input
            field="name"
            label="Nombre"
            value={formState.name.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.name.showError}
            validationMessage={validateNameMessage}
          />
          <Input
            field="email"
            label="Correo electrónico"
            value={formState.email.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.email.showError}
            validationMessage={emailValidationMessage}
          />
          <Input
            field="username"
            label="Nombre de usuario"
            value={formState.username.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.username.showError}
            validationMessage={validateUsernameMessage}
          />
          <Input
            field="password"
            label="Contraseña"
            value={formState.password.value}
            onChangeHandler={handleInputValueChange}
            type="password"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.password.showError}
            validationMessage={validatePasswordMessage}
          />
          <Input
            field="passwordConfirm"
            label="Confirmar Contraseña"
            value={formState.passwordConfirm.value}
            onChangeHandler={handleInputValueChange}
            type="password"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.passwordConfirm.showError}
            validationMessage={passwordConfirmationMessage}
          />
          <button type="submit" disabled={isSubmitButtonDisabled}>
            Register
          </button>
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
          ¿Do you already have an account? Sign in here!
        </span>
      </div>
    </div>
  );
};
