import { useState } from "react";
import validator from "validator";
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
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

  function handelInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((pervEdit) => ({
      ...pervEdit,
      [identifier]: false,
    }));
  }

  function handelInputBlur(identifier) {
    setDidEdit((pervEdit) => ({
      ...pervEdit,
      [identifier]: true,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }
    console.log("Sending HTTP request....");
    setEnteredValues({ email: "", password: "" });
    setDidEdit({ email: false, password: false });
  }

  function reset() {
    setEnteredValues({ email: "", password: "" });
    setDidEdit({ email: false, password: false });
  }
  const isSubmitDisabled =
    enteredValues.email === "" ||
    enteredValues.password === "" ||
    emailIsInvalid ||
    passwordIsInvalid;

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
            onBlur={() => handelInputBlur("email")}
            onChange={(event) => handelInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && (
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
            onBlur={() => handelInputBlur("password")}
            onChange={(event) =>
              handelInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
          <div className="control-error">
            {passwordIsInvalid && (
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
