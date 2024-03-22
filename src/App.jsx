import Header from "./components/Header.jsx";
import Login from "./components/Login/Login.jsx";
import React, { useState, useEffect } from "react";
import { arrayUsers } from "./components/data.js";
function App() {
  const [startEntered, setStartEntered] = useState(false);
  const [startShowInfo, setStartShowInfo] = useState(false);
  const SendLoginData = async (enteredLoginData) => {
    console.log(enteredLoginData);

    // Проверяем, есть ли пользователь с таким email и password в массиве
    const userFound = arrayUsers.find(
      (user) =>
        user.email === enteredLoginData.email &&
        user.password === enteredLoginData.password
    );

    if (userFound) {
      console.log("Пользователь найден.");
      setStartShowInfo(true);
    } else {
      console.log("Пользователь не найден.");
      setStartEntered(true);
    }
  };

  const handlerEnterted = () => {
    setStartEntered(false);
    setStartShowInfo(false);
  };

  let contentRegistration = startEntered ? (
    <>
      <p className="UserNotFound">Пользователь не найден.</p>
      <div className="buttonReturnContainer">
        <button className="buttonReturn" onClick={handlerEnterted}>
          Вернуться в регистрационную форму
        </button>
      </div>
    </>
  ) : (
    <>
      <Header />
      <main>
        <Login onSendLoginData={SendLoginData} />
      </main>
    </>
  );

  let contentShowInformation = startShowInfo ? (
    <p className="UserNotFound">lets go</p>
  ) : (
    contentRegistration
  );

  return <>{contentShowInformation}</>;
}

export default App;
