import { useState } from "react";
import ChartResult from "../Charts/ChartResult";

// Компонент для отображения дополнительной информации о выбранном результате эксперимента
const ExperimentDetails = ({ result }) => {
  let copm = "";
  if (result === "TiN") {
    copm = <ChartResult numberChart={0} nameChart={"TiN"} />;
  } else if (result === "TiN - Epilam") {
    copm = <ChartResult numberChart={1} nameChart={"TiN - Epilam"} />;
  } else if (result === "TiN - DLC") {
    copm = <ChartResult numberChart={2} nameChart={"TiN - DLC"} />;
  } else if (result === "(CrAlSi)N") {
    copm = <ChartResult numberChart={3} nameChart={"(CrAlSi)N"} />;
  } else if (result === "(CrAlSi)N - Epilam") {
    copm = <ChartResult numberChart={4} nameChart={"(CrAlSi)N - Epilam"} />;
  } else if (result === "(CrAlSi)N - DLC") {
    copm = <ChartResult numberChart={5} nameChart={"(CrAlSi)N - DLC"} />;
  }
  // Здесь можно добавить логику для отображения дополнительной информации о выбранном результате
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">
        Дополнительная информация о результате: {result}
      </h2>
      <p>
        Здесь могут быть дополнительные данные о результате эксперимента {copm}
      </p>
    </div>
  );
};

const TableOne = () => {
  const [experimentData, setExperimentData] = useState([
    {
      experiment: "TiN",
      status: "Успешный",
      result: ["TiN", "TiN - Epilam", "TiN - DLC"],
    },
    {
      experiment: "(CrAlSi)N",
      status: "Приемлемый",
      result: ["(CrAlSi)N", "(CrAlSi)N - Epilam", "(CrAlSi)N - DLC"],
    },
    // Добавьте остальные данные экспериментов здесь
  ]);

  // Состояние для хранения выбранного результата эксперимента для отображения деталей
  const [selectedResult, setSelectedResult] = useState(null);

  // Функция для открытия деталей выбранного результата эксперимента
  const handleExperimentDetails = (result) => {
    setSelectedResult(result);
  };

  // Функция для закрытия деталей выбранного результата эксперимента
  const handleCloseExperimentDetails = () => {
    setSelectedResult(null);
  };

  return (
    <div className="rounded-md border border-gray-300 bg-white px-4 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-6 xl:py-4">
      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Эксперименты
      </h4>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead className="bg-gray-100 dark:bg-meta-4">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Название
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Статус
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Результаты
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-boxdark dark:divide-gray-800">
            {experimentData.map((experiment, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-boxdark"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {experiment.experiment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {/* {experiment.status} */}
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      experiment.status === "Успешный"
                        ? "bg-success text-success"
                        : experiment.status === "Неудачный"
                        ? "bg-danger text-danger"
                        : experiment.status === "В процессе"
                        ? "bg-warning text-warning"
                        : "bg-primary text-primary"
                    }`}
                  >
                    {experiment.status}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {experiment.result.map((res, idx) => (
                    <p
                      key={idx}
                      className="text-blue-500 cursor-pointer hover:underline"
                      onClick={() => handleExperimentDetails(res)}
                    >
                      {res}
                    </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Показываем компонент с дополнительной информацией, если выбран какой-то результат */}
      {selectedResult && (
        <div className="mt-4">
          <ExperimentDetails result={selectedResult} />
          <button
            onClick={handleCloseExperimentDetails}
            className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
          >
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
};

export default TableOne;
