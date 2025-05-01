import { post } from "../api/api";

export const login = async (email, password, setUser, setShowLogin) => {
  try {
    console.log('Отправляем данные:', { email, password });
    const data = await post('/api/login', { email, password });
    console.log("Успешный вход", data);
    setUser(data.user);
    if (setShowLogin) setShowLogin(false);
  } catch (error) {
    console.error('Ошибка входа:', error.message);
  }
};
