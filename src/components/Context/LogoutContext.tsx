import React, { useState } from 'react';

const LogoutContext = React.createContext({
  isLogout: false,
  setIsLogout: () => {}, // Функция, которая принимает значение типа boolean
});

export default LogoutContext;
