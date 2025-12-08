import axios from "axios";

export const API_URL = "http://academico3.rj.senac.br/praja"; 

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 15000, // 15 segundos
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptores opcionais para log ou token
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("Erro na API:", error);
//     return Promise.reject(error);
//   }
// );

export default apiClient;