import React, { useState } from "react";
import { useTiNData } from "../Context/ChartDataContext";

const EditExperimentResult = ({
  numberChart,
  onhandlerRetutnsetShowEditForm,
}) => {
  const { chartDataFromContext, setChartDataFromContext } = useTiNData();
  const [editedData, setEditedData] = useState([
    ...chartDataFromContext[numberChart],
  ]);

  const handleInputChange = (e, rowIndex, columnIndex) => {
    const { value } = e.target;
    const newData = [...editedData];
    newData[rowIndex][columnIndex] = parseFloat(value); // Преобразуем в числовой формат
    setEditedData(newData);
  };

  const handleSaveChanges = () => {
    const newData = [...chartDataFromContext];
    newData[numberChart] = editedData;
    setChartDataFromContext(newData);
    onhandlerRetutnsetShowEditForm(false);
    alert("Результат эксперимента был успешно отредактирован");
  };

  return (
    <div>
      <h2>Редактирование данных эксперимента</h2>
      <table>
        <thead>
          <tr>
            <th>Значение 1</th>
            <th>Значение 2</th>
            {/* Добавьте заголовки для остальных столбцов, если необходимо */}
          </tr>
        </thead>
        <tbody>
          {editedData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((value, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, columnIndex)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSaveChanges}>Сохранить изменения</button>
    </div>
  );
};

export default EditExperimentResult;
