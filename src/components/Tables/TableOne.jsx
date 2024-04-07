import { useState } from "react";
const TableOne = () => {
  const [experimentData, setExperimentData] = useState([
    {
      material: "Сталь",
      tool: "Карбид",
      speed: 3000,
      feed: 0.15,
      depth: 2,
      result: "Хороший",
    },
    {
      material: "Алюминий",
      tool: "Cталь",
      speed: 5000,
      feed: 0.25,
      depth: 3,
      result: "Приемлемый",
    },
    {
      material: "Чугун",
      tool: "Алмаз",
      speed: 4000,
      feed: 0.2,
      depth: 2.5,
      result: "Отличный",
    },
    {
      material: "Пластик",
      tool: "Поликарбонат",
      speed: 2000,
      feed: 0.1,
      depth: 1.5,
      result: "Неплохой",
    },
    {
      material: "Дерево",
      tool: "Твердосплавный",
      speed: 2500,
      feed: 0.12,
      depth: 2.8,
      result: "Удовлетворительный",
    },
    {
      material: "Стекло",
      tool: "Алмазный",
      speed: 1500,
      feed: 0.08,
      depth: 1,
      result: "Слабый",
    },
    {
      material: "Медь",
      tool: "Алмаз",
      speed: 3500,
      feed: 0.18,
      depth: 2.2,
      result: "Хороший",
    },
    {
      material: "Керамика",
      tool: "Карбид",
      speed: 2800,
      feed: 0.14,
      depth: 2.3,
      result: "Отличный",
    },
    {
      material: "Бетон",
      tool: "Алмазный",
      speed: 1800,
      feed: 0.1,
      depth: 2.5,
      result: "Средний",
    },
    {
      material: "Полиэтилен",
      tool: "Сталь",
      speed: 2200,
      feed: 0.11,
      depth: 1.8,
      result: "Удовлетворительный",
    },
  ]);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Результаты экспериментов
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Материал
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Инструмент
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Скорость
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Кормить
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Глубина
            </h5>
          </div>
        </div>

        {experimentData.map((experiment, key) => (
          <div
            className={`grid grid-cols-6 ${
              key === experimentData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {experiment.material}
              </p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{experiment.tool}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{experiment.speed}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{experiment.feed}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{experiment.depth}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{experiment.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
