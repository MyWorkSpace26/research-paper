import { useState } from "react";
import validator from "validator";
import useInput from "../../hooks/use-input";
export default function Login(props) {
  const isNotEmpty = (value) => value.trim() !== "";
  const emailCondition = (value) => validator.isEmail(value);
  const passwordCondition = (value) =>
    validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isNotEmpty && emailCondition);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isNotEmpty && passwordCondition);

  function handleSubmit(event) {
    event.preventDefault();
    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }
    const LoginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log("Sending HTTP request....");
    resetEmailInput();
    resetPasswordInput();
    props.onSendLoginData(LoginData);
  }

  function reset() {
    resetEmailInput();
    resetPasswordInput();
  }
  const isSubmitDisabled = emailInputHasError || passwordInputHasError;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Зайти в личный кабинет</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Электронная почта</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
          <div className="control-error">
            {emailInputHasError && (
              <p>Пожалуйста, введите действительный адрес электронной почты.</p>
            )}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="on"
            onBlur={passwordBlurHandler}
            onChange={passwordChangeHandler}
            value={enteredPassword}
          />
          <div className="control-error">
            {passwordInputHasError && (
              <p>
                Пожалуйста, введите действительный Пароль (не менее 8 символов и
                содержит 1 заглавную букву и 1 цифра).
              </p>
            )}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat" onClick={reset}>
          Сброс
        </button>
        <button type="submit" className="button" disabled={isSubmitDisabled}>
          Зайти
        </button>
      </p>
    </form>
  );
}
