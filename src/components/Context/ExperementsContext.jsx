import { createContext, useContext, useState } from "react";
const ExperimentContext = createContext();

export const useExperiment = () => {
  return useContext(ExperimentContext);
};

export const ExperimentProvider = ({ children }) => {
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
  ]);

  return (
    <ExperimentContext.Provider value={{ experimentData, setExperimentData }}>
      {children}
    </ExperimentContext.Provider>
  );
};
