import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

function isPublicRoute(config) {
  const publicRoutes = ['api/auth', '/usuario'];
  return publicRoutes.includes(config.url) && config.method === 'post';
}

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log(config.url, config)
    if (token && !isPublicRoute(config)) {

      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
