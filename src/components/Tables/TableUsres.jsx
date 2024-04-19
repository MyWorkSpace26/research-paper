import React, { useState } from "react";
import validator from "validator";

const TableUsres = () => {
  const [arrayUsers, setArrayUsers] = useState([
    {
      email: "user1@example.com",
      password: "Password@1",
      fullName: "Иванов Иван Иванович",
      phoneNumber: "+7 (123) 456-78-90",
      username: "ivan123",
    },
    {
      email: "user2@example.com",
      password: "Password@2",
      fullName: "Петров Петр Петрович",
      phoneNumber: "+7 (987) 654-32-10",
      username: "petr456",
    },
    {
      email: "user3@example.com",
      password: "Password@3",
      fullName: "Сидорова Елена Владимировна",
      phoneNumber: "+7 (111) 222-33-44",
      username: "elena_s",
    },
    {
      email: "user4@example.com",
      password: "Password@4",
      fullName: "Николай Петрович Кузнецов",
      phoneNumber: "+7 (985) 334-78-65",
      username: "Nikolay45",
    },
  ]);
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    username: "",
  });
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
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
    });
    setError("");
    setShowForm(false); // Закрываем форму при отмене
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
        onClick={() => setShowForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Добавить пользователя
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4"
        >
          <h2 className="text-xl font-bold mb-4">Новый пользователь</h2>
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
              value={user.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Остальные поля формы */}
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
              value={user.password}
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
              value={user.fullName}
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
              value={user.phoneNumber}
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
              value={user.username}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/*  */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Добавить
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Отменить
            </button>
          </div>
        </form>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsres;
