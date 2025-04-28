
const API_URL =  'http://localhost:3000';

// process.env.REACT_APP_API_URL ||

export async function post(endpoint, body) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ошибка сервера');
  }

  return await response.json();
}