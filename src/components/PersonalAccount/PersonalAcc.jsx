import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../../common/Loader";
import PageTitle from "../PageTitle";
import ECommerce from "../../pages/Dashboard/ECommerce";
import Calendar from "../../pages/Calendar";
import Profile from "../../pages/Profile";
import Tables from "../../pages/Tables";
import Settings from "../../pages/Settings";

function PersonalAcc() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Personal Account" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default PersonalAcc;

/* 
import { useShowInfo } from "../Context/ShowInfoContext";
const { setStartShowInfo } = useShowInfo();

  const handleReturnToLogin = () => {
    setStartShowInfo(false); // Изменяем состояние startShowInfo на false при нажатии на кнопку
  };

<div>
      <p className="text-3xl font-bold underline">lets go</p>
      <button
        onClick={handleReturnToLogin}
        className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
      >
        Вернуться на форму авторизации
      </button>
    </div>



*/
