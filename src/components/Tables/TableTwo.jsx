const experimentData = [
  {
    name: "Исследование скорости резания стали",
    method: "Карбидный инструмент",
    result: "Хороший",
  },
  {
    name: "Эксперимент по фрезерованию алюминия",
    method: "Стальной инструмент",
    result: "Приемлемый",
  },
  {
    name: "Тестирование сверления титана",
    method: "Алмазный инструмент",
    result: "Отличный",
  },
  {
    name: "Опыт по точению меди",
    method: "Керамический инструмент",
    result: "Средний",
  },
];

const PerformanceTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Показатели эффективности
        </h4>
      </div>

      <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Название эксперимента</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Метод</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Результат</p>
        </div>
      </div>

      {experimentData.map((experiment, key) => (
        <div
          className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {experiment.name}
            </p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {experiment.method}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {experiment.result}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceTable;
