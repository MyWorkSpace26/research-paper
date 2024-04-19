import { useState } from "react";
import ChartResult from "../Charts/ChartResult";
import { useTiNData } from "../Context/ChartDataContext";
import * as XLSX from "xlsx";
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
      <p>{copm}</p>
    </div>
  );
};

const TableOne = () => {
  const chartDataFromContext = useTiNData();
  const [experimentData, setExperimentData] = useState([
    {
      experiment: "TiN",
      status: "Успешный",
      result: ["TiN", "TiN - Epilam", "TiN - DLC"],
      indexExper: [0, 1, 2],
    },
    {
      experiment: "(CrAlSi)N",
      status: "Приемлемый",
      result: ["(CrAlSi)N", "(CrAlSi)N - Epilam", "(CrAlSi)N - DLC"],
      indexExper: [3, 4, 5],
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

  const handleDownloadExcel = (experimentIndex) => {
    const { result, indexExper } = experimentData[experimentIndex];
    const selectedData = indexExper.map((index) => chartDataFromContext[index]);

    selectedData.forEach((innerArray, index) => {
      const wb = XLSX.utils.book_new();

      const wsData = innerArray.map((row) =>
        row.map((cell) => (typeof cell === "string" ? cell : "" + cell))
      );

      const ws = XLSX.utils.aoa_to_sheet(wsData);

      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

      // Используем название результата эксперимента для имени файла
      const filename = `${result[index]}_${index + 1}.xlsx`;

      XLSX.writeFile(wb, filename);
    });
  };

  return (
    <div className="rounded-md border border-gray-300 bg-white px-4 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-6 xl:py-4">
      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Эксперименты
      </h4>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead className="bg-gray-100 dark:bg-meta-8">
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Действия
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
                <td className="[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8047 3.60938L17.3906 5.19531L8.39062 14.1953C8.30343 14.2827 8.23843 14.3868 8.20148 14.5L7.89062 16.5C7.87955 16.5452 7.87402 16.5917 7.87402 16.6387C7.87402 16.7799 7.93634 16.9143 8.04703 17.025L9.97135 18.9492C10.0821 19.0599 10.2165 19.1222 10.3577 19.1222C10.4046 19.1222 10.4511 19.1167 10.4963 19.1056L12.4963 18.7947C12.609 18.7577 12.7131 18.6927 12.8005 18.6055L21.8005 9.60547C22.0131 9.3929 22.0131 9.06913 21.8005 8.85656L19.1438 6.19989C18.9313 5.98732 18.6075 5.98732 18.395 6.19989L9.39502 15.1999C9.38235 15.2126 9.37341 15.2279 9.36831 15.2447L8.29839 16.5317L8.49087 16.3392L15.8047 3.60938ZM16.8047 2.60938L19.3906 5.19531L18.1953 6.39062L15.6094 3.80469L16.8047 2.60938ZM18.3906 7.80469L17.1953 9L7.87402 18.3213L9.16785 19.6151L18.4881 10.2949L18.3906 7.80469ZM20.1953 5L19 6.19531L19.8047 7L21 5.80469L20.1953 5Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                          fill=""
                        />
                        <path
                          d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                          fill=""
                        />
                        <path
                          d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                          fill=""
                        />
                        <path
                          d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDownloadExcel(index)}
                      className="hover:text-primary"
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                          fill=""
                        />
                        <path
                          d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
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
