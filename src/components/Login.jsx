import { useState } from "react";
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handelInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    event.target.reset();
  }

  function reset() {
    setEnteredValues({ email: "", password: "" });
  }

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
            onChange={(event) => handelInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handelInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat" onClick={reset}>
          Сброс
        </button>
        <button type="submit" className="button">
          Зайти
        </button>
      </p>
    </form>
  );
}
