import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useTiNData } from "../Context/ChartDataContext";

const ChartResult = (props) => {
  const chartDataFromContext = useTiNData();
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        categories: [],
      },
      /* markers: {
        size: 6,
        hover: {
          sizeOffset: 4,
        },
      }, */
    },
    series: [], // Initialize series as an empty array
  });

  useEffect(() => {
    // Your data fetching logic here
    const fetchData = async () => {
      try {
        // Simulated data
        if (chartDataFromContext && chartDataFromContext.length > 0) {
          // Для вашего формата данных, данные будут внутри первого элемента массива
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
                    /* offsetY: -10, */
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

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
      <h2 className="text-xl font-semibold mb-4">{props.nameChart}</h2>
      <div id="chartOne" className="-ml-5">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
        />
      </div>
    </div>
  );
};

export default ChartResult;
