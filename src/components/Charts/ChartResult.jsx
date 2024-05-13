import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useTiNData } from "../Context/ChartDataContext";
import EditExperimentResult from "../Tables/EditExperimentResult";
import * as XLSX from "xlsx";

const ChartResult = (props) => {
  const { chartDataFromContext, setChartDataFromContext } = useTiNData();
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        categories: [],
      },
      stroke: {
        width: 2, // Здесь вы можете задать желаемую толщину линии
      },
    },
    series: [], // Initialize series as an empty array
  });

  useEffect(() => {
    // Your data fetching logic here
    const fetchData = async () => {
      try {
        // Simulated data
        if (chartDataFromContext && chartDataFromContext.length > 0) {
          // Для вашего формата данных, данные будут внутри первого элемента
          // массива
          const data = chartDataFromContext[props.numberChart];
          if (data && data.length > 0) {
            const labels = data.map((row) => row[0]);
            const values = data.map((row) => row[1]);

            setChartData({
              options: {
                chart: {
                  id: "basic-line",
                },
                xaxis: {
                  categories: labels,
                  title: {
                    text: "Time (s)",
                    offsetY: -10,
                  },
                  labels: {
                    show: false,
                    formatter: function (val) {
                      if (val !== undefined) {
                        return val.toFixed(2);
                      }
                      return val;
                    },
                  },
                },
                yaxis: {
                  title: {
                    text: "Cutting Force, Fz (N)",
                  },
                  labels: {
                    show: false,
                  },
                },
              },
              series: [
                {
                  name: "Data",
                  data: values,
                },
              ],
            });
          }
        }
      } catch (error) {
        console.error("Error reading data:", error);
      }
    };
    fetchData();
  }, [chartDataFromContext]);

  const handleDownload = () => {
    const selectedData = chartDataFromContext[props.numberChart];

    const wb = XLSX.utils.book_new();

    const wsData = selectedData.map((row) =>
      row.map((cell) => (typeof cell === "string" ? cell : "" + cell))
    );

    const ws = XLSX.utils.aoa_to_sheet(wsData);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Используем название результата эксперимента для имени файла
    const filename = `${props.nameChart}.xlsx`;

    XLSX.writeFile(wb, filename);
  };

  const [showEditForm, setShowEditForm] = useState(false);
  const handleEdit = () => {
    setShowEditForm(true);
  };

  const handlerRetutnsetShowEditForm = (val) => setShowEditForm(val);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
      <h2 className="text-xl font-semibold mb-4">{props.nameChart}</h2>
      <button onClick={handleDownload}>Скачать результат</button>
      <br></br>
      <button onClick={handleEdit}>Редактирование результата</button>
      <div id="chartOne" className="-ml-5">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
        />
      </div>
      {/* Показываем компонент редактирования данных, если showEditForm равно true */}
      {showEditForm && (
        <EditExperimentResult
          numberChart={props.numberChart}
          onhandlerRetutnsetShowEditForm={handlerRetutnsetShowEditForm}
        />
      )}
    </div>
  );
};
export default ChartResult;
