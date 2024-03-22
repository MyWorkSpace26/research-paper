import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("User can input text in email field", async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Электронная почта");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    await waitFor(() => {
      expect(emailInput.value).toBe("test@example.com");
    });
  });

  test("User can input text in password field", async () => {
    render(<Login />);

    const passwordInput = screen.getByLabelText("Пароль");

    fireEvent.change(passwordInput, { target: { value: "Password123" } });

    await waitFor(() => {
      expect(passwordInput.value).toBe("Password123");
    });
  });

  /* Для валидного адреса электронной почты:

    Ожидаем, что сообщение об ошибке о невалидном адресе электронной почты не будет отображено.
    Проверяем, что значение поля электронной почты соответствует введенному значению.

    Для неверного адреса электронной почты:

    Ожидаем, что сообщение об ошибке о невалидном адресе электронной почты будет отображено.
    Проверяем, что значение поля электронной почты соответствует введенному значению. */

  test("Validation error is shown for invalid email", async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Электронная почта");

    // Вводим неверный адрес электронной почты
    fireEvent.change(emailInput, { target: { value: "testexample.com" } });

    await waitFor(() => {
      // Проверяем, что сообщение об ошибке о неверном адресе почты отображается
      expect(
        screen.getByText(
          "Пожалуйста, введите действительный адрес электронной почты."
        )
      ).toBeInTheDocument();
    });

    // Проверяем, что значение поля почты равно введенному значению
    expect(emailInput.value).toBe("testexample.com");
  });

  test("Validation error is not shown for valid email", async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Электронная почта");

    // Вводим верный адрес электронной почты
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    await waitFor(() => {
      // Проверяем, что сообщение об ошибке о неверном адресе почты не отображается
      expect(
        screen.queryByText(
          "Пожалуйста, введите действительный адрес электронной почты."
        )
      ).toBeNull();
    });

    // Проверяем, что значение поля почты равно введенному значению
    expect(emailInput.value).toBe("test@example.com");
  });

  /* Для верного пароля:

    Ожидаем, что сообщение об ошибке о невалидном пароле не отображается.
    Проверяем, что значение поля пароля равно введенному значению.


    Для неверного пароля:

    Ожидаем, что сообщение об ошибке о невалидном пароле отображается.
    Проверяем, что значение поля пароля равно введенному значению. */

  test("Validation error is shown for invalid password", async () => {
    render(<Login />);

    const passwordInput = screen.getByLabelText("Пароль");

    // Вводим неверный пароль
    fireEvent.change(passwordInput, { target: { value: "password" } });

    await waitFor(() => {
      // Проверяем, что сообщение об ошибке о невалидном пароле отображается
      expect(
        screen.getByText(
          "Пожалуйста, введите действительный Пароль (не менее 8 символов и содержит 1 заглавную букву и 1 цифру)."
        )
      ).toBeInTheDocument();
    });

    // Проверяем, что значение поля пароля равно введенному значению
    expect(passwordInput.value).toBe("password");
  });

  test("Validation error is not shown for valid password", async () => {
    render(<Login />);

    const passwordInput = screen.getByLabelText("Пароль");

    // Вводим верный пароль
    fireEvent.change(passwordInput, { target: { value: "Password@123" } });

    await waitFor(() => {
      // Проверяем, что сообщение об ошибке о невалидном пароле не отображается
      expect(
        screen.queryByText(
          "Пожалуйста, введите действительный Пароль (не менее 8 символов и содержит 1 заглавную букву и 1 цифру)."
        )
      ).toBeNull();
    });

    // Проверяем, что значение поля пароля равно введенному значению
    expect(passwordInput.value).toBe("Password@123");
  });
});
