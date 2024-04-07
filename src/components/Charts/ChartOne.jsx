import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  // настройки диаграммы (options) остаются неизменными
};

const ChartOne = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Исследование скорости резания стали",
        data: [50, 70, 30, 80, 20, 90, 40, 100, 60, 40, 70, 90],
      },
      {
        name: "Эксперимент по фрезерованию алюминия",
        data: [20, 40, 60, 80, 100, 80, 60, 40, 20, 0, 20, 40],
      },
      {
        name: "Тестирование сверления титана",
        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 0],
      },
      {
        name: "Опыт по точению меди",
        data: [10, 20, 30, 10, 50, 70, 90, 70, 50, 30, 20, 10],
      },
    ],
  });

  const handleReset = () => {
    // функция handleReset остается без изменений
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <h2 className="text-xl font-semibold mb-4">
        Отношение числа сотрудников к разным экспериментам
      </h2>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
