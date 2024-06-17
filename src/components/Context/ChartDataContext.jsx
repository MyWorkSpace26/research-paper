import { createContext, useContext, useState } from "react";
import TinExp from "../../dataExperiments/TinExp.json";
import TinEpilamExp from "../../dataExperiments/TinEpilamExp.json";
import TiNDlsExp from "../../dataExperiments/TinDlsExp.json";
import CrAlSiNExp from "../../dataExperiments/CrAlSiNExp.json";
import CrAlSiNEpilamExp from "../../dataExperiments/CrAlSiNEpilamExp.json";
import CrAlSiNDLCExp from "../../dataExperiments/CrAlSiNDLCExp.json";

const DataContext = createContext();

export const useTiNData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  // Здесь можно добавить логику для загрузки данных или использовать заглушку
  // Например:
  /* 
    0 -----> TiN
    1-----> TiN - Epilam
    2-----> TiN - DLC
    3-----> (CrAlSi)N
    4-----> (CrAlSi)N - Epilam
    5-----> (CrAlSi)N - DLC

  */

  // Объединяем данные из всех файлов JSON
  const combinedData = [
    ...Object.values(TinExp),
    ...Object.values(TinEpilamExp),
    ...Object.values(TiNDlsExp),
    ...Object.values(CrAlSiNExp),
    ...Object.values(CrAlSiNEpilamExp),
    ...Object.values(CrAlSiNDLCExp),
    // Добавьте остальные файлы здесь, если нужно
  ];
  // Преобразуем объединенные данные в нужный формат
  const transformedArray = combinedData.map((array) =>
    array.map((obj) => [obj["time"], obj["fz"]])
  );

  const [chartDataFromContext, setChartDataFromContext] =
    useState(transformedArray);

  return (
    <DataContext.Provider
      value={{ chartDataFromContext, setChartDataFromContext }}
    >
      {children}
    </DataContext.Provider>
  );
};
