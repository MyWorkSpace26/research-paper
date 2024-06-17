import React, { useState } from "react";
import validator from "validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import employees from "../datausers";

const EditUserForm = ({ user, onSave, onCancel }) => {
  const [editedUser, setEditedUser] = useState(user);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: name === "isAdmin" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка почты
    if (!emailCondition(editedUser.email)) {
      setError("Неверный формат email");
      return;
    }

    // Проверка пароля
    if (!passwordCondition(editedUser.password)) {
      setError(
        "Пароль должен содержать минимум 8 символов, включая цифры, символы и заглавные буквы"
      );
      return;
    }

    // Проверка наличия fullName
    if (!editedUser.fullName.trim()) {
      setError("Пожалуйста, укажите полное имя");
      return;
    }
    onSave(editedUser);
    setError("");
  };

  const handleCancel = () => {
    onCancel();
    setError("");
  };

  // Условия для проверок
  const emailCondition = (value) => validator.isEmail(value);

  const passwordCondition = (value) =>
    validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4"
    >
      <h2 className="text-xl font-bold mb-4">Редактирование пользователя</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Электронная почта:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Пароль:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={editedUser.password}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Полное имя:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={editedUser.fullName}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Номер телефона:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={editedUser.phoneNumber}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Имя пользователя:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={editedUser.username}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="isAdmin"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          IsAdmin:
        </label>
        <select
          id="isAdmin"
          name="isAdmin"
          value={editedUser.isAdmin}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Сохранить
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Отменить
        </button>
      </div>
    </form>
  );
};

const TableUsers = () => {
  const [arrayUsers, setArrayUsers] = useState(employees);
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    username: "",
    isAdmin: "false",
  });
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null); // Пользователь для редактирования

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "isAdmin" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка почты
    if (!emailCondition(user.email)) {
      setError("Неверный формат email");
      return;
    }

    // Проверка пароля
    if (!passwordCondition(user.password)) {
      setError(
        "Пароль должен содержать минимум 8 символов, включая цифры, символы и заглавные буквы"
      );
      return;
    }

    // Проверка наличия fullName
    if (!user.fullName.trim()) {
      setError("Пожалуйста, укажите полное имя");
      return;
    }

    // Проверяем, существует ли уже пользователь с таким email
    if (arrayUsers.some((existingUser) => existingUser.email === user.email)) {
      setError("Пользователь с таким email уже существует!");
      return;
    }

    // Добавляем нового пользователя в массив
    setArrayUsers((prevArray) => [...prevArray, user]);

    // Сбрасываем значения формы после добавления пользователя
    setUser({
      email: "",
      password: "",
      fullName: "",
      phoneNumber: "",
      username: "",
      isAdmin: "false",
    });
    setError("");
    setShowForm(false); // Закрываем форму после добавления
  };

  const handleCancel = () => {
    setUser({
      email: "",
      password: "",
      fullName: "",
      phoneNumber: "",
      username: "",
      isAdmin: "false",
    });
    setError("");
    setShowForm(false); // Закрываем форму при отмене
    setEditingUser(null); // Очищаем пользователя для редактирования
  };

  const handleEdit = (index) => {
    // Устанавливаем пользователя для редактирования
    setEditingUser(arrayUsers[index]);
    setShowForm(true); // Показываем форму редактирования
  };

  // Функция для обновления массива пользователей
  const handleSaveUser = (editedUser) => {
    // Находим индекс редактируемого пользователя в массиве
    const index = arrayUsers.findIndex(
      (user) => user.email === editedUser.email
    );
    if (index === -1) {
      // Создаем новый массив с обновленными данными пользователя
      const updatedUsers = [...arrayUsers];
      updatedUsers[arrayUsers.length] = editedUser;
      // Обновляем состояние массива пользователей
      setArrayUsers(updatedUsers);
      setShowForm(false);
      alert("Данные были успешно отредактированы.");
    } else {
      setError("Пользователь не найден");
    }
    setShowForm(false);
  };

  // Условия для проверок
  const emailCondition = (value) => validator.isEmail(value);

  const passwordCondition = (value) =>
    validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });

  return (
    <div>
      <button
        onClick={() => {
          setShowForm(true);
          setEditingUser(null); // Установка пользователя для добавления
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Добавить пользователя
      </button>
      {showForm && (
        <EditUserForm
          user={editingUser || user} // Передаем либо выбранного пользователя для редактирования, либо пустого для добавления
          onSave={handleSaveUser}
          onCancel={handleCancel}
        />
      )}
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Полное имя
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Номер телефона
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Имя пользователя
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              IsAdmin
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Действия
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {arrayUsers.map((user, index) => (
            <tr
              key={index}
              className={(index + 1) % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.email}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.fullName}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.phoneNumber}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.username}
              </td>
              <td
                className={`px-4 py-4 whitespace-nowrap text-sm ${
                  user.isAdmin ? "text-green-500" : "text-red-500"
                }`}
              >
                {user.isAdmin ? "True" : "False"}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                <button
                  onClick={() => {
                    handleEdit(index); // Обработка нажатия на кнопку редактирования
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
