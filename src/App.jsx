import HeaderLogin from "./components/HeaderLogin.jsx";
import Login from "./components/Login/Login.jsx";
import React, { useState } from "react";
import { arrayUsers } from "./components/datausers.js";
import { useShowInfo } from "./components/Context/ShowInfoContext.jsx";
import PersonalAcc from "./components/PersonalAccount/PersonalAcc.jsx";
import { ShowInfoProvider } from "./components/Context/ShowInfoContext.jsx";
function App() {
  const [startEntered, setStartEntered] = useState(false);
  const { startShowInfo, setStartShowInfo } = useShowInfo();
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
      <HeaderLogin />
      <main>
        <Login onSendLoginData={SendLoginData} />
      </main>
    </>
  );

  let contentShowInformation = startShowInfo ? (
    <PersonalAcc />
  ) : (
    contentRegistration
  );

  return <>{contentShowInformation}</>;
}

export default () => (
  <ShowInfoProvider>
    <App />
  </ShowInfoProvider>
);
