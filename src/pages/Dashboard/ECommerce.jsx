import React from "react";
import ChartOne from "../../components/Charts/ChartOne";
import DefaultLayout from "../../layout/DefaultLayout";
import { useShowInfo } from "../../components/Context/ShowInfoContext";

const ECommerce = () => {
  const { setStartShowInfo } = useShowInfo();

  const handleReturnToLogin = () => {
    setStartShowInfo(false); // Изменяем состояние startShowInfo на false при нажатии на кнопку
  };
  console.log("hi amin");
  return (
    <DefaultLayout>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
