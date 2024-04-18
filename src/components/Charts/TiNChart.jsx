import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const TiNChart = () => {
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
          [0.6, -0.28],
          [0.61, -2.5],
          [0.62, 1.91],
          [0.64, 3.87],
          [0.65, 0.34],
          [0.66, 1.25],
          [0.67, 1.84],
          [0.68, 0.35],
          [0.7, -0.12],
          [0.71, 1.31],
          [0.72, -0.92],
          [0.73, -3.27],
          [0.74, 3.85],
          [0.76, -0.72],
          [0.77, -1.36],
          [0.78, 1.43],
          [0.79, -0.88],
          [0.8, -0.7],
          [0.82, -3.58],
          [0.83, -0.68],
          [0.84, -0.23],
          [0.85, 0.53],
          [0.86, 2.02],
          [0.88, 1.78],
          [0.89, -0.78],
          [0.9, -3.38],
          [0.91, 1.23],
          [0.92, -2.85],
          [0.94, 0.04],
          [0.95, -0.2],
          [0.96, -2.45],
          [0.97, 1.24],
          [0.98, 4.4],
          [1.0, 2.76],
          [1.01, 0.33],
          [1.02, -0.86],
          [1.03, -1.43],
          [1.04, 2.82],
          [1.06, -2.08],
          [1.07, -0.7],
          [1.08, 2.76],
          [1.09, -1.99],
          [1.1, 1.21],
          [1.12, 5.58],
          [1.13, -0.84],
          [1.14, -1.97],
          [1.15, -0.84],
          [1.16, 2.69],
          [1.18, 2.1],
          [1.19, 0.04],
          [1.2, -1.19],
          [1.21, 2.39],
          [1.22, -2.35],
          [1.24, -0.54],
          [1.25, 0.52],
          [1.26, -1.7],
          [1.27, 4.26],
          [1.28, 0.0],
          [1.3, -3.87],
          [1.31, -1.23],
          [1.32, -1.77],
          [1.33, -0.74],
          [1.34, 0.54],
          [1.36, 4.48],
          [1.37, 0.26],
          [1.38, 0.69],
          [1.39, -0.17],
          [1.4, -2.91],
          [1.42, -0.2],
          [1.43, -2.7],
          [1.44, 1.68],
          [1.45, 3.08],
          [1.46, 0.85],
          [1.48, 0.28],
          [1.49, -0.81],
          [1.5, -2.7],
          [1.51, -0.03],
          [1.52, 0.22],
          [1.54, -3.0],
          [1.55, -3.17],
          [1.56, 3.8],
          [1.57, -1.65],
          [1.58, -1.57],
          [1.6, -0.54],
          [1.61, 0.47],
          [1.62, 0.68],
          [1.63, 0.67],
          [1.64, 2.98],
          [1.66, -2.13],
          [1.67, -1.31],
          [1.68, -1.4],
          [1.69, 2.44],
          [1.7, -0.95],
          [1.72, -0.53],
          [1.73, -3.02],
          [1.74, -0.14],
          [1.75, 2.32],
          [1.76, -0.61],
          [1.78, 0.08],
          [1.79, 0.11],
          [1.8, -1.96],
          [1.81, 1.35],
          [1.82, 0.04],
          [1.84, -0.96],
          [1.85, -0.56],
          [1.86, 0.53],
          [1.87, -2.14],
          [1.88, 1.7],
          [1.9, -0.34],
          [1.91, -1.26],
          [1.92, 0.51],
          [1.93, -0.77],
          [1.94, 0.33],
          [1.96, 1.13],
          [1.97, -0.69],
          [1.98, 0.47],
          [1.99, 1.49],
          [2.0, -1.38],
          [2.02, 2.9],
          [2.03, 0.09],
          [2.04, -3.16],
          [2.05, -0.88],
          [2.06, -2.97],
          [2.08, 1.26],
          [2.09, 1.87],
          [2.1, 0.92],
          [2.11, -3.86],
          [2.12, 3.05],
          [2.14, 0.38],
          [2.15, 0.11],
          [2.16, 1.89],
          [2.17, 0.43],
          [2.18, 0.75],
          [2.2, 2.27],
          [2.21, 1.94],
          [2.22, -0.01],
          [2.23, -0.11],
          [2.24, 1.51],
          [2.26, 1.28],
          [2.27, 0.1],
          [2.28, 0.65],
          [2.29, -1.54],
          [2.3, 2.23],
          [2.32, 2.55],
          [2.33, 0.49],
          [2.34, -0.74],
          [2.35, 2.98],
          [2.36, 0.07],
          [2.38, 1.56],
          [2.39, 1.28],
          [2.4, -1.14],
          [2.41, 3.05],
          [2.42, -1.19],
          [2.44, -2.29],
          [2.45, -1.5],
          [2.46, -0.85],
          [2.47, 2.13],
          [2.48, -1.27],
          [2.5, -0.73],
          [2.51, 1.06],
          [2.52, -1.93],
          [2.53, -0.54],
          [2.54, 2.63],
          [2.56, -1.54],
          [2.57, -1.82],
          [2.58, -0.4],
          [2.59, 3.11],
          [2.6, -1.12],
          [2.62, -1.26],
          [2.63, 1.2],
          [2.64, 1.19],
          [2.65, -1.51],
          [2.66, 1.32],
          [2.68, -1.44],
          [2.69, -1.41],
          [2.7, 1.19],
          [2.71, 4.72],
          [2.72, 2.39],
          [2.74, 2.09],
          [2.75, 2.47],
          [2.76, -2.23],
          [2.77, 0.06],
          [2.78, 0.81],
          [2.8, 0.05],
          [2.81, -1.08],
          [2.82, 0.35],
          [2.83, 2.08],
          [2.84, 2.21],
          [2.86, -0.6],
          [2.87, 1.51],
          [2.88, 1.8],
          [2.89, -0.04],
          [2.9, -1.03],
          [2.92, -1.59],
          [2.93, -0.48],
          [2.94, -0.69],
          [2.95, -1.02],
          [2.96, 1.88],
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
              title: {
                text: "Time (s)", // Добавляем название оси X
              },
              labels: {
                show: false,
                formatter: function (val) {
                  if (val !== undefined) {
                    return val.toFixed(2);
                  }
                  return val; // Возвращаем значение без изменений, если оно undefined
                },
              },
            },
            yaxis: {
              title: {
                text: "Cutting Force, Fz (N)", // Добавляем название оси Y
              },
              labels: {
                show: false, // Скрыть метки на оси Y
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
      <h2 className="text-xl font-semibold mb-4">TiN</h2>
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

export default TiNChart;