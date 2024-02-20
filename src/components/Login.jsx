import { useState } from "react";
import validator from "validator";
import useInput from "../hooks/use-input";
export default function Login() {
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

  /////////////*//////////////////*////////////////*

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  ////////*****///// */
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

  /*   const emailIsInvalid =
    didEdit.email && !validator.isEmail(enteredValues.email);

  const passwordIsInvalid =
    didEdit.password &&
    !validator.isStrongPassword(enteredValues.password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });
 */

  /* function handelInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((pervEdit) => ({
      ...pervEdit,
      [identifier]: false,
    }));
  } */

  /*   function handelInputBlur(identifier) {
    setDidEdit((pervEdit) => ({
      ...pervEdit,
      [identifier]: true,
    }));
  } */

  function handleSubmit(event) {
    event.preventDefault();
    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }
    console.log(enteredEmail);
    console.log("Sending HTTP request....");
    resetEmailInput();
    resetPasswordInput();
    setEnteredValues({ email: enteredEmail, password: "" });
    setDidEdit({ email: false, password: false });
  }

  function reset() {
    /* setEnteredValues({ email: "", password: "" });
    setDidEdit({ email: false, password: false }); */
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
            //onBlur={() => handelInputBlur("email")}
            onBlur={emailBlurHandler}
            //onChange={(event) => handelInputChange("email", event.target.value)}
            onChange={emailChangeHandler}
            //value={enteredValues.email}
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
            //onBlur={() => handelInputBlur("password")}
            onBlur={passwordBlurHandler}
            /* onChange={(event) =>
              handelInputChange("password", event.target.value)
            } */
            onChange={passwordChangeHandler}
            /* value={enteredValues.password} */
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
