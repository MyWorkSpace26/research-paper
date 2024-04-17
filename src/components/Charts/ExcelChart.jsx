import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ExcelChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [], // Initialize series as an empty array
  });

  useEffect(() => {
    // Your data fetching logic here
    const fetchData = async () => {
      try {
        // Simulated data
        const data = [
          [0.0, 1.45],
          [0.01, 1.94],
          [0.02, -0.98],
          [0.04, -2.28],
          [0.05, 0.75],
          [0.06, 0.4],
          [0.07, -0.61],
          [0.08, 1.67],
          [0.1, 0.96],
          [0.11, 0.24],
          [0.12, 1.43],
          [0.13, 0.42],
          [0.14, 2.68],
          [0.16, -0.46],
          [0.17, -0.44],
          [0.18, 0.54],
          [0.19, 2.66],
          [0.2, 0.72],
          [0.22, 3.51],
          [0.23, -0.23],
          [0.24, -2.69],
          [0.25, 2.11],
          [0.26, 4.16],
          [0.28, -0.98],
          [0.29, 1.41],
          [0.3, -2.4],
          [0.31, 0.8],
          [0.32, -0.04],
          [0.34, 1.52],
          [0.35, -2.5],
          [0.36, 0.13],
          [0.37, -2.48],
          [0.38, 1.51],
          [0.4, 1.37],
          [0.41, -0.35],
          [0.42, -0.52],
          [0.43, 2.76],
          [0.44, 0.72],
          [0.46, -0.24],
          [0.47, 1.51],
          [0.48, -0.23],
          [0.49, 1.42],
          [0.5, 1.34],
          [0.52, 2.59],
          [0.53, -2.82],
          [0.54, 1.31],
          [0.55, 1.76],
          [0.56, -4.03],
          [0.58, -2.47],
          [0.59, 1.06],
        ];

        const labels = data.map((row) => row[0]);
        const values = data.map((row) => row[1]);

        setChartData({
          options: {
            chart: {
              id: "basic-line",
            },
            xaxis: {
              categories: labels,
              labels: {
                formatter: function (val) {
                  if (val !== undefined) {
                    return val.toFixed(2);
                  }
                  return val; // Возвращаем значение без изменений, если оно undefined
                },
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
      } catch (error) {
        console.error("Error reading data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
      <h2 className="text-xl font-semibold mb-4">Excel Chart</h2>
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

export default ExcelChart;
