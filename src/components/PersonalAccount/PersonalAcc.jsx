import React from "react";
import { useShowInfo } from "../Context/ShowInfoContext";

const PersonalAcc = () => {
  const { setStartShowInfo } = useShowInfo();

  const handleReturnToLogin = () => {
    setStartShowInfo(false); // Изменяем состояние startShowInfo на false при нажатии на кнопку
  };

  return (
    <div>
      <p className="text-3xl font-bold underline">lets go</p>
      <button
        onClick={handleReturnToLogin}
        className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
      >
        Вернуться на форму авторизации
      </button>
    </div>
  );
};

export default PersonalAcc;
